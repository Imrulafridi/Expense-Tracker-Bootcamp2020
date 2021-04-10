import React, { useState, useContext } from "react";
import { Transcontext } from "../context/transContext";

const Inputform = () => {
  const { addTrans } = useContext(Transcontext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTrans = {
      id: Math.floor(Math.random() * 100000000),
      amount: amount,
      descp: text,
    };

    addTrans(newTrans);

    setText('');
    setAmount("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="text">Add new transaction</label> <hr />
      <span>Text</span>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text} required/>
      <label htmlFor="number">Amount</label> <br />
      <span>Negative-Expenses, Positive-Income</span>
      <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} required/>
      <input type="submit" value="Add Transaction" className="btn" />
    </form>
  );
};

export default Inputform;
