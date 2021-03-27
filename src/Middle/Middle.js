import React, { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Middle.css"
import { GlobalContext } from "../context/GlobalState"
import Transactionli from "../Tranactionli/Transactionls"



export default function Middle() {



    const { transactions,adddata,  gettrasactionlist} = useContext(GlobalContext)

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");


    let amountarr = transactions.map(ele => ele.amount);

    let income = amountarr.filter(ele => ele > 0).reduce((acc, amt) => amt += acc, 0).toFixed(2)
    let expenses = amountarr.filter(ele => ele < 0).reduce((acc, amt) => amt += acc, 0).toFixed(2)

    useEffect(()=>{

        gettrasactionlist();
    },[])




    function onsubmit(e){
        e.preventDefault()


       const newTransaction={
               
                text,
                amount:+amount
       }
       adddata(newTransaction);
       setText("")
       setAmount("")
       
    }

    return (
        <>

            <div className="row overall">
                <div className="income resultbox col-6">
                    <h4 className="">
                        Income


                         </h4>
                    <h5 className="green">
               <i class="fa fa-inr"></i>

                       {income}
                        </h5>
                </div>
                <div className="expenses resultbox col-6">
                    <h4 className="">

                        Expenses


                     </h4>
                    <h5 className="red">
               <i class="fa fa-inr"></i>

                        {expenses}
                   </h5>
                </div>


            </div>

            <div className="logs centerpic">
                <h4 className="centering">History logs</h4>
                <ul className="list" id="list">

                    {transactions.map(transaction => (
                        <Transactionli key={transaction.id} transaction={transaction} />
                    ))}


                </ul>


            </div>

            <div className="entryarea">
                <h4 className="centering">Your Transactions</h4>

                <form onSubmit={onsubmit} id="forms" className="formbottom">
                    <div className="form-group">
                        <label for="text">Expense/Income<br />Title</label>


                        <br />

                        <input required type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="amount"
                        >Amount <br />
                       (negative - expense, positive - income)
                       </label>
                        <br />
                        <input required type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>

                    <button class="btn  btn-lg btn-block purp">Add</button>
                </form>
            </div>

        </>


    )



}