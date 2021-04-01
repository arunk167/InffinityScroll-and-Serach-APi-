import {DISPLAYLIST, USER_NEAR_ME} from '../../config/urls'
import { apiGet, apiPost } from "../../utils/utils";
export function displayList (data={}){ 
    return new Promise ((resolve,reject)=>{
        apiPost(DISPLAYLIST,data).then(res=>{
           
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
 }
 
 export function userNearMe(data){
     return new Promise((resolve,reject)=>{
         apiGet(USER_NEAR_ME+`${data}`).then(res=>{
             resolve(res);
         }).catch(error=>{
             reject(error)
         })
     })
 }