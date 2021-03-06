import axios from "axios"


export default (state, action) => {
    switch (action.type) {
        case  "GET_TRANSACTION":
            return(
               {

                ...state,
                isloading:false,
                transactions:action.payload
               }
            )
        case 'DELETE':

            return ({
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            })

        case "ADD":
            return ({

                ...state,
                transactions:[...state.transactions,action.payload]
            })
            case "TRANSACTION_ERROR":
                return{
                    ...state,
                    error:action.payload
                }
        default:
            return state;

    }
}