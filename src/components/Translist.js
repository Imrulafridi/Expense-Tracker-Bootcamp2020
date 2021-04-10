import { useContext } from "react";
import { Transcontext } from "../context/transContext";

const Translist = () => {
  const { trans, delTrans } = useContext(Transcontext);

  return (
    <div className="list">
      {trans.map((transc) => {
        return (
          <li key={transc.id} className={transc.amount > 0 ? "plus" : "minus"}>
            {transc.descp} <span>$ {transc.amount}</span>
            <span className="del-btn" onClick={() => delTrans(transc.id)}>
              X
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default Translist;
