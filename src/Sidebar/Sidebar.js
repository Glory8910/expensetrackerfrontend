import React, { useContext } from "react"
import     { Link}   from "react-router-dom"
import "./Sidebar.css"
import { GlobalContext } from "../context/GlobalState"


export default function Sidebar() {

    let {transactions}=useContext(GlobalContext)

    let amountarr=transactions.map(ele=>ele.amount);

    let totalamt=amountarr.reduce((acc,amt)=>acc+=amt,0).toFixed(2);
    
    return (
        <>
        <div className="incomebox ">
        <h4>
            Your Balance


        </h4>
        <h5>
        <i class="fa fa-inr"></i> 

            {totalamt}
        </h5>
        </div>
           
        </>


    )



}