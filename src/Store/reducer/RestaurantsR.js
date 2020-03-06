import * as actionType from "../action/actionType"
import { updateObject } from "./utilReducer"
const initialState = {
   restaurantsArr:[],
   colors:["#0288D1","#B3E5FC","#FFFFFF","#03A9F4","#8BC34A","#212121","#757575","#BDBDBD"],
   isLoaded:false
} 

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.RESTAURANT_INIT:{  
        // optional to push each res one by one {restaurantsArr:[...state.restaurantsArr,action.payload]} ***check actions***
          return updateObject(state,{restaurantsArr:action.payload,isLoaded:true})
        }
      

        default:
            return state;

    }
}

export default reducer