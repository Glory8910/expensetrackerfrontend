import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {GoalContext} from "../context/Goalcontext/GoalState"
import Goalsli from "../goalsli/Goalsli"
import "./Last.css"



export default function Last() {

    const [title, SetTitle] = useState("")
    const [saveamt, SetSaveamt] = useState("")
    const [desc, SetDesc] = useState("")

    let {goal, addgoal, deletegoal,getgoallist } = useContext(GoalContext)

 

    let updategoal = (e) => {
        e.preventDefault();

        let newgoal = {
            title,
            amount: saveamt,
            description: desc
        }

        addgoal(newgoal);
        SetTitle("")
        SetSaveamt("")
        SetDesc("")
    }

useEffect(()=>{
    getgoallist();
},[])

    return (
        <>

<div className="goalsarea">
    
<h4 className="centering">Set Goals</h4>
                <form className="formbottom" onSubmit={updategoal}>
                    <div className="form-group">
                        <label for="text">Your Financial goal<br />Title</label>


                        <br />

                        <input type="text" required value={title} onChange={(e) => SetTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="amount"
                        >Amount <br />
                       (negative - expense, positive - income)
                       </label>
                        <br />
                        <input type="number" required value={saveamt} onChange={(e) => SetSaveamt(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label for="text">Description</label>


                        <br />

                        <textarea value={desc} required onChange={(e) => SetDesc(e.target.value)} />
                    </div>

                    <button class="btn purp btn-lg btn-block">Add</button>
                </form>
            </div>
            <div className="cornerarea">

                <h4 className="centering">Finaincial Goals</h4>
                <ul className="list" id="list">

                    {

                        goal.map(ele=><Goalsli  listofgoal={ele}/>
                        )

                    }
           
                   









                </ul>



            </div>
            
        </>


    )



}