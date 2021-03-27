import { Children, createContext, useContext, useReducer } from "react"
import Appreducer from "./Appreducer/Appreducer"
import axios from "axios";

const initialState = {
    transactions: [],
    error: null,
    isloading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Appreducer, initialState);


    async function deletedata(id) {

        try {


            axios.delete(`https://trackyourexpensesdaily.herokuapp.com/users/delatransaction/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }



                }
            )


            dispatch({
                type: "DELETE",
                payload: id
            })

        } catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            })
            console.log(error)
        }

    }

    async function gettrasactionlist() {
        try {
            let res = await axios.get("https://trackyourexpensesdaily.herokuapp.com/users/alltransactions")

    

            dispatch({
                type: "GET_TRANSACTION",
                payload: res.data.data
            })
        }

        catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            })

        }

    }





    async function adddata(transactiondata) {
        try {

           

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const res = await axios.post("https://trackyourexpensesdaily.herokuapp.com/users/transactions", transactiondata)

            dispatch({
                type: "ADD",
                payload: transactiondata
            })

        }
        catch (error) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: error.response.data.error
            })
     
        }

    }
    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deletedata,
                adddata,
                gettrasactionlist,
                isloading: state.isloading,
                error: state.error
            }}
        >

            {children}
        </GlobalContext.Provider>
    )
}