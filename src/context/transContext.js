import { createContext , useReducer } from "react";
import TransReducer from "./transReducer";

const intialtrans = {
  trans:  [
        { id: 1, descp: "Cash", amount: 500 },
        { id: 2, descp: "Book", amount: -400 },
        { id: 3, descp: "Salary", amount: 500 },
]};

export const Transcontext = createContext(intialtrans);

export const TransProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransReducer, intialtrans);
    
    function addTrans(transObj) {
     
        dispatch({
            type: 'ADD',
            payload: transObj
        })
    }

    function delTrans(id) {
      
        dispatch({
          type: "DELETE",
          payload: id
        });
    }

    return (
        <Transcontext.Provider value={{
            trans: state.trans,
            addTrans,
            delTrans
        }}>
            {children}
        </Transcontext.Provider>
    )

};
