import React, {useContext} from "react"
import authContext from "../context/auth/authContext"
import { Route, Redirect} from "react-router-dom"


const PrivateRoute =({component: Component, ...rest})=>{
    const context = useContext(authContext)
    const { loading, token, isAuthenticted}= context
   
  return (
  <Route
      {...rest}
      render={props => !token && !loading && !isAuthenticted? (
        <Redirect to="/signin" />
      ) : (
        <Component {...props} />
      )
      }
      />
  )
} 

export default PrivateRoute