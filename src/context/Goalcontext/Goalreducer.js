

export default (state,action)=>{

    switch(action.type){

        case "GET_GOAL":
            return{
                ...state,
                goal:action.payload,
                isgoalloading:false,
            }
        case "ADDGOAL":
            return(
        
                
                {
                ...state,
                goal:[...state.goal,action.payload]
            })


        case "DELETEGOAL":

        return({

            ...state,
            goal: state.goal.filter(ele=>ele._id!==action.payload)
        })

        case "GOAL_ERROR":
            return{
                ...state,
                    goalerror:action.payload
            }

        default:
        return state;

    }


}