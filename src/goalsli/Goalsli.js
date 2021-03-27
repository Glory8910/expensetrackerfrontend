import React, { useContext } from "react"
import { GoalContext } from "../context/Goalcontext/GoalState"
import "./Goalsli.css"

export default function Goalsli({listofgoal}){

    let { deletegoal } = useContext(GoalContext)


return(

    <li className= {listofgoal.amount>0? "plus listofgoals row" :"minus row  listofgoals"}>
    
    <span className="col-10"> {listofgoal.title} <span className="value">
    <i class="fa fa-inr"></i>
        {listofgoal.amount}</span> </span> <span className="col-2"><button className="deletebtn "
    onClick={()=>{
        deletegoal(listofgoal._id)
    }}
    
    >X</button></span>
    <div className="desce">
        {listofgoal.description}
    </div>

 </li>
)
}