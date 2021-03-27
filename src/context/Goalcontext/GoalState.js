import React, { createContext, useContext, useReducer } from "react"
import Goalreducer from "../Goalcontext/Goalreducer"
import axios from "axios"



export const initialgoal = {
    goal: [
        
    ],
    goalerror: null,
    isgoalloading: true
}


export const GoalContext = createContext(initialgoal);

export const GoalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Goalreducer, initialgoal);



   async function getgoallist() {
        try{
        let resgoal = await axios.get("https://trackyourexpensesdaily.herokuapp.com/users/allgoals")
       


        dispatch({
            type: "GET_GOAL",
            payload: resgoal.data.data
        })


    }
    catch(error){
        dispatch({
            type:"GOAL_ERROR",
            payload:error.response.data.error
        })
        console.log(error)
    }
    }

   async function addgoal(goal) {

        const res=await axios.post("https://trackyourexpensesdaily.herokuapp.com/users/goals",goal)


        dispatch({
            type: "ADDGOAL",
            payload: goal
        })

    }

    function deletegoal(id) {

        axios.delete(`https://trackyourexpensesdaily.herokuapp.com/users/delagoal/${id}`,
        {
            headers: {
                'Content-Type': 'application/json'
            }
            

       
    }
    )

        dispatch({
            type: "DELETEGOAL",
            payload: id
        })
    }


    return (
        <GoalContext.Provider
            value={{
                goal: state.goal,
                deletegoal,
                addgoal,
                getgoallist,
                isgoalloading:state.isgoalloading,
                goalerror:state.goalerror
            }}
        >

            {children}
        </GoalContext.Provider>
    )




}