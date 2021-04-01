import store from "../store";
import types from "../types"

const {dispatch}=store

export  const Add=(id)=>{
   
    dispatch({
        type:types.ADD,
        payload:id
    })
}
export const CashOut=(price)=>{
    dispatch({
        type:types.CASHOUT,
        payload:price
    })
}