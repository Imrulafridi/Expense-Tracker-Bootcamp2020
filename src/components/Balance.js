import React, { useContext } from "react";
import { Transcontext } from "../context/transContext";

const Balance = () => {
  const { trans } = useContext(Transcontext);

  const balance = () => {
    let total = 0;
    trans.map((tran) => {
      return total += Number(tran.amount);
    });

    return total;
  };

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3> $ {balance()} </h3>
    </div>
  );
};

export default Balance;
