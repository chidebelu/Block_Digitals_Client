import React, {useContext, useEffect} from "react"
import TawkTo from 'tawkto-react'
import authContext from "components/context/auth/authContext"


const App = ()=>{
 const context = useContext(authContext)
 const {loaduser} = context
 
 useEffect(()=>{
   loaduser()
 },[loaduser])
 
  useEffect(()=>{
    const propertyId = "626ead64b0d10b6f3e702b9e"
    const tawkId = "1g205al6o"
 var tawk = new TawkTo(propertyId, tawkId)

    tawk.onStatusChange((status) => 
    {
        // console.log(status)
    })
  })

 
    return(
        <div></div>
    )
}

export default App