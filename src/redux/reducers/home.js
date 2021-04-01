import types from "../types"


const initial_state={
    a:0,
    total_cash_out:0,
    total_balance:0
};
export default function reducer(state=initial_state,action){
    
    switch(action.type){
       
        case types.ADD:
           
            const id =action.payload
            const {total_balance}=state
            balance=id
            // balance+=id
          
            
            // balance+=id
            return {
                ...state,
                a:id,
                total_balance:balance
            }
        // case types.CASHOUT:
        //     const price =action.payload
        //     balance-=price
        //     return{
        //         ...state,
        //         total_balance:balance,
        //         total_cash_out:state.total_cash_out+price

        //     }
        default :
        return "bye"
    }

}