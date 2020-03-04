import * as actionType from "../action/actionType"
import { updateObject } from "./utilReducer"
const initialState = {
   restaurantsArr:[]
   

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.DATA_INIT:{
          return updateObject(state,{restaurantsArr:action.payload})
        }

        default:
            return state;

    }



}
export default reducer