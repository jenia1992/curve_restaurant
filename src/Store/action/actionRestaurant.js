import * as actionType from "./actionType"
import {getDataFromServer} from '../../ManagerAxios/ManagerAxios'
export const RestaurantDataInit =(restaurants)=>{
    return {
        type:actionType.DATA_INIT,
        payload:restaurants
    }
}

export const dataCall=()=>{
    return (dispatch)=>{
        let data = {
            url: "http://3.222.204.208/restaurants_list",
            method: "post",
            data: {"app_key": `${process.env.REACT_APP_CURVE_API_KEY}`},
            headers: "",
            params: ""
        }
        getDataFromServer(data).then(res => {
            
            dispatch(RestaurantDataInit(res.data.restaurants))
            let tempRestaurants = res.data.restaurants.map(restaurant=>{
                let dataMenu = {
                    url: "http://3.222.204.208/restaurant_menu",
                    method: "post",
                    data: {
                      "app_key": `${process.env.REACT_APP_CURVE_API_KEY}`,
                      "restaurant_id": `${restaurant.restaurant_id}`,
                    },
                    headers: "",
                    params: ""
                  }
                  getDataFromServer(dataMenu).then(ress => {
                    try {
                        //Fix the Json replace the NaN without brackets
                    var result = JSON.parse(ress.data.replace(/\bNaN\b/g, '"***NaN***"'), (key, value)=> {
                        return value === "***NaN***" ? NaN : value;
                    });
                    console.log(result.menu_item);
                    } catch (error) {
                        // empty array
                        console.log(ress.data.menu_item);
                        
                    }
                   
              
                  }).catch(err => {
                      
                    console.log(err);
              
                  })
            })
            
          


        }).catch(err => {
            console.log(err)
        })
    }
}
