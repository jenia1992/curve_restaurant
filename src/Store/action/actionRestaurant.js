import * as actionType from "./actionType"
import {getDataFromServer} from '../../ManagerAxios/ManagerAxios'
export const RestaurantDataInit =(dbArr)=>{
    return {
        type:actionType.DATA_INIT,
        payload:dbArr
    }
}

export const dataCall=()=>{
    return dispatch=>{
        let data = {
            url: "http://3.222.204.208/restaurants_list",
            method: "post",
            data: {"app_key": `${process.env.REACT_APP_CURVE_API_KEY}`},
            headers: "",
            params: ""
        }
    
        getDataFromServer(data).then(res => {
            console.log(res);
            dispatch(RestaurantDataInit(res.data.restaurants))
    
            
        }).catch(err => {
            console.log(err)
        })
    }
}
