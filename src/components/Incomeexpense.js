import { useContext } from "react";
import { Transcontext } from "../context/transContext";

const Incomeexpense = () => {
  const { trans } = useContext(Transcontext);


  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < trans.length; i++) {
      if (trans[i].amount > 0) income += Number(trans[i].amount);
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < trans.length; i++) {
      if (trans[i].amount < 0) expense += Number(trans[i].amount);
    }
    return expense;
  };

  return (
    <div className="income-exp">
      <div>
        <h3>INCOME</h3>
        <p style={{ color: "green" }}>$ {getIncome()}</p>
      </div>
      <div>
        <h3>EXPENSE</h3>
        <p style={{ color: "red" }}>$ {getExpense()}</p>
      </div>
    </div>
  );
};

export default Incomeexpense;
