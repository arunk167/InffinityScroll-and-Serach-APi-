import { LOGIN,OTPVERIFY } from "../../config/urls"
import { apiPost, setUserData } from "../../utils/utils"
import store from "../store"
import types from '../types'
const {dispatch} =store
export function login(data={}) {
    return new Promise((resolve,reject)=>{
        apiPost(LOGIN,data).then(res=>{
            resolve(res)
        }).catch(error=>{
            reject(error);
        })
    })
    
}
export function otpVerify (data={}){ 
    return new Promise ((resolve,reject)=>{
        apiPost(OTPVERIFY,data).then(res=>{
           
            setUserData(res.data).then(suc=>{
                
                dispatch({
                    type:types.ONOTPVERIFY,
                    payload:res.data
                })
            })
           
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
 }
 export const onLogout=()=>{
   
    dispatch({
        type:types.ONLOGOUT,
        payload:{}
    })
}