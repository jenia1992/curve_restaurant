import * as actionType from "./actionType"
import { getDataFromServer, jsonHandler } from '../../ManagerAxios/ManagerAxios'

export const RestaurantDataInit = (restaurants) => {
    return {
        type: actionType.RESTAURANT_INIT,
        payload: restaurants
    }
}

export const dataCall = () => {
    return (dispatch) => {
        let data = {
            url: "https://3.222.204.208/restaurants_list",
            method: "post",
            data: { "app_key": `${process.env.REACT_APP_CURVE_API_KEY}` },
            headers: "",
            params: ""
        }
        //get restaurants from api
        getDataFromServer(data).then(res => {
            const menuPromises =res.data.restaurants.map(restaurant => {
                let dataMenu = {
                    url: "https://3.222.204.208/restaurant_menu",
                    method: "post",
                    data: {
                        "app_key": `${process.env.REACT_APP_CURVE_API_KEY}`,
                        "restaurant_id": `${restaurant.restaurant_id}`,
                    },
                    headers: "",
                    params: ""
                }
                //get each restaurant menu
                return getDataFromServer(dataMenu).then(ress => {
                    //return { restaurant_id:Number , restaurant_name:String , menu_item:Array , }
                    let obj = { ...restaurant, ...jsonHandler(ress.data) }
                    return obj
                    // optional to push each res one by one
                    // dispatch(RestaurantDataInit(obj))
                })
                    .catch(err => { console.log(err); })
            })
            Promise.all(menuPromises).then(data=>{
                //return array of data
                dispatch(RestaurantDataInit(data))
            })
            
        }).catch(err => {
            console.log(err)
        })
    }
}

