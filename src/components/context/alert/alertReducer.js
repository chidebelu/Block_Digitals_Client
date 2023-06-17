import {SET_ALERT, REMOVE_ALERT} from "../../types"

const reducer = (state, action)=>{
    switch(action.type){
        case SET_ALERT: return{
            ...state,
            alert: action.payload
        }

    case REMOVE_ALERT: return{
        ...state,
        alert: state.alert.filter((alert)=> alert.id !== action.payload)
    }
        default: return state
    }
}

export default reducer