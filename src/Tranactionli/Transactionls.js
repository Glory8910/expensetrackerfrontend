import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import "./Transaction.css"


export default function Transactionli({transaction}){

    let {deletedata}=useContext(GlobalContext)
   let sign=transaction.amount>0 ? '+': '-'
return(

    <li className= {transaction.amount>0? "plus row tran" :"minus row tran"}>
           
    <span className="col-10"> {transaction.text} <span className="value"> 
    <i class="fa fa-inr"></i>
    
    {transaction.amount}</span> </span> <span className="col-2"><button className="deletebtn "
    onClick={()=>{
        deletedata(transaction._id)
    }}
    
    >X</button></span>

 </li>
)
}