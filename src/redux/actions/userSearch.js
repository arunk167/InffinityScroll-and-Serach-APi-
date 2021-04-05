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
 
 export const userNearMe=(data)=>{
    
        return apiGet(USER_NEAR_ME+`?name=${data}`)
 }

 export const nearByUsers=(long,lat)=>{
    
    return apiGet(USER_NEAR_ME+`?coordinates=["${long}",${lat}]`)
}