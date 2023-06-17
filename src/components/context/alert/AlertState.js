import AlertReducer from "./alertReducer"
import AlertContext from "./alertContext"
import {SET_ALERT, REMOVE_ALERT} from "../../types"
import { useReducer } from "react"
import {v4 as uuid} from "uuid"

const AlertState = props =>{

const initialState = {
    alert: []
}

const [state, dispatch] = useReducer(AlertReducer, initialState)

const setAlert = (message, type, timeout)=>{
    const id = uuid()
    dispatch({
        type: SET_ALERT,
        payload: [{message, type, id}]
    })
    console.log(message, type, timeout)
    setTimeout(()=>{
        dispatch({
            type: REMOVE_ALERT,
            payload: id
        })
    }, timeout)
}


return <AlertContext.Provider value={{
    alert: state.alert,
    setAlert
}}>
    {props.children}
</AlertContext.Provider>
}


export default AlertState