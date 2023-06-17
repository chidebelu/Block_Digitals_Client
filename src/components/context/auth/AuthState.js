import React, { useReducer} from "react"
import axios from "axios"
import AuthContext from "./authContext"
import AuthReducer from "./authReducer"
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, AUTH_ERROR, USER_LOADED,
     REGISTRATION_REQUEST, LOGIN_REQUEST, REGISTRATION_SUCCESS, 
     CLEAR_MESSAGE, REGISTRATION_FAIL, CLEAR_ERROR, 
     UPDATE_USER_DETAILS_REQUEST, UPDATE_USER_DETAILS_SUCCESS,
      UPDATE_USER_DETAILS_FAIL, USER_LIST_REQUEST, USER_LIST_FAIL, 
      USER_LIST_SUCCESS, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, 
      USER_DELETE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_FAIL, 
      USER_UPDATE_SUCCESS, USER_UPDATE_RESET, USER_SETPLAN, 
      USER_ADMIN_USER_UPDATE_REQUEST, USER_ADMIN_USER_UPDATE_SUCCESS,
       USER_ADMIN_USER_UPDATE_FAIL, USER_INVEST_SUCCESS, 
       USER_INVEST_FAIL, USER_INVEST_REQUEST, USER_GETINVEST_REQUEST,
        USER_GETINVEST_FAIL, USER_GETINVEST_SUCCESS, USER_POSTWITHDRAWAL_SUCCESS,
         USER_POSTWITHDRAWAL_REQUEST, USER_POSTWITHDRAWAL_FAIL, 
         USER_GETWITHDRAWAL_REQUEST, USER_GETWITHDRAWAL_SUCCESS, USER_GETWITHDRAWAL_FAIL, 
         ADMIN_GET_ALL_WITHDRAWAL_LIST_REQUEST, ADMIN_GET_ALL_WITHDRAWAL_LIST_SUCCESS,
          ADMIN_GET_ALL_WITHDRAWAL_LIST_FAIL, ADMIN_USER_DELETE_WITHDRAWAL_REQUEST,
           ADMIN_USER_DELETE_WITHDRAWAL_SUCCESS, ADMIN_USER_DELETE_WITHDRAWAL_FAIL,
            ADMIN_USER_WITHDRAWAL_UPDATE_REQUEST, ADMIN_USER_WITHDRAWAL_UPDATE_FAIL,
             ADMIN_USER_WITHDRAWAL_UPDATE_SUCCESS, 
             ADMIN_GET_ALL_USER_DEPOSITS_SUCCESS,
             ADMIN_GET_ALL_USER_DEPOSITS_FAIL,
             ADMIN_GET_ALL_USER_DEPOSITS_REQUEST} from "../../types"
import setAuthToken from "../../../utils/setAuthToken"

const AuthState = props =>{
    const initialState ={
        token: localStorage.getItem("token"),
        isAuthenticated: false,
        loading: false,
        error: null,
        user: {},
        editProfile: {},
        allusers: [],
        message: null,
        success: false,
        userEdit: {},
        userAdminUpdate: {},
        plan: JSON.parse(localStorage.getItem("plan")),
        invested: {},
        userInvest: [],
        getUserWithdrawalList: [],
        admingetUserWithdrawalRequest: {},
        adminGetAllWithdrawalsLists: [],
        deleteWithdrawalRequests: {},
        adminUserWithdrawalUpdatee: {},
        adminGetAllDepositsListt: []
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const registerUser = async (user)=>{
        dispatch({
                type: REGISTRATION_REQUEST
            })
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post("/api/users/register", user , config)

             dispatch({
            type: REGISTRATION_SUCCESS,
            payload: response.data
        })
            dispatch(loaduser())
        } catch (err) {
            dispatch({
                type: REGISTRATION_FAIL,
               payload: err.response && err.response.data.message
                ? err.response.data.message 
                : err.message
            })
        }
       
    }

    const login = async (user)=>{
       
        dispatch({
                type: LOGIN_REQUEST
            })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post("/api/users/login", user,config)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
            dispatch(loaduser())
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
               payload: err.response && err.response.data.message
                ? err.response.data.message 
                : err.message
            })
        }
    }

      const getUserDetails = async (user, id)=>{
          console.log(user, id)
          dispatch({
                type: UPDATE_USER_DETAILS_REQUEST
            })
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        try {
            const response = await axios.put(`/api/users/profile/${id}`, user,config)
            dispatch({
                type: UPDATE_USER_DETAILS_SUCCESS,
                payload: response.data
            })
            loaduser()
        } catch (err) {
            dispatch({
                type: UPDATE_USER_DETAILS_FAIL,
               payload: err.response && err.response.data.message
                ? err.response.data.message 
                : err.message
            })
        }
    }

    const loaduser = async ()=>{
        if(localStorage.token){
            setAuthToken(localStorage.token)
            try {
                const response = await axios.get("/api/users/profile")
                dispatch({
                    type: USER_LOADED,
                    payload: response.data
                })
            } catch (err) {
                dispatch({
                    type: AUTH_ERROR
                })
                
            }
        }
    }

     const listUsers = async ()=>{
         dispatch({
                type: USER_LIST_REQUEST
            })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
            if(localStorage.token){
            const auth = localStorage.getItem("token")
            setAuthToken(auth)
            
        try {
            
            const response = await axios.get("/api/users/allusers", config)
            dispatch({
                type: USER_LIST_SUCCESS,
                payload: response.data
            })
            
        } catch (err) {
            dispatch({
                type: USER_LIST_FAIL,
               payload: err.response && err.response.data.message
                ? err.response.data.message 
                : err.message
            })
        }
    }
    }

     const deleteUser = async (id)=>{
         dispatch({
                type: USER_DELETE_REQUEST
            })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
            if(localStorage.token){
            setAuthToken(localStorage.token)
            
        try {
            
             await axios.delete(`/api/users/${id}`, config)
            dispatch({
                type: USER_DELETE_SUCCESS,
                payload: id
            })
            
        } catch (err) {
            dispatch({
                type: USER_DELETE_FAIL,
               payload: err.response && err.response.data.message
                ? err.response.data.message 
                : err.message
            })
        }
    }
    }

       const updateUser = async ( id)=>{
         dispatch({
                type: USER_UPDATE_REQUEST
            })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
            if(localStorage.token){
            setAuthToken(localStorage.token)
            
        try {
            
           const {data} = await axios.get(`/api/users/${id}`, config)
            dispatch({
                type: USER_UPDATE_SUCCESS,
                payload: data
            })
            
        } catch (err) {
            dispatch({
                type: USER_UPDATE_FAIL,
              payload: err.response && err.response.data.message
                ? err.response.data.message 
                : err.message
            })
        }
    }
    }

        const adminUserUpdate = async ( user, id)=>{
         dispatch({
                type: USER_ADMIN_USER_UPDATE_REQUEST
            })
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
            if(localStorage.token){
            setAuthToken(localStorage.token)
            
        try {
            
           const {data} = await axios.put(`/api/users/${id}`, user, config)
            dispatch({
                type: USER_ADMIN_USER_UPDATE_SUCCESS,
                payload: data
            })
            
        } catch (err) {
            dispatch({
                type: USER_ADMIN_USER_UPDATE_FAIL,
              payload: err.response && err.response.data.message
                ? err.response.data.message 
                : err.message
            })
        }
    }
    }

    const userUpdateReset = () =>{
        dispatch({
            type: USER_UPDATE_RESET
        })
    }

    const logout = ()=>{
        dispatch({
            type: LOGOUT
        })
    
}

    const clearError = ()=>{
        dispatch({
            type: CLEAR_ERROR
        })
    }

    const clearMessage = ()=>{
        dispatch({
            type: CLEAR_MESSAGE
        })
    }

    const setPlan = (data) =>{
        dispatch({
            type: USER_SETPLAN,
            payload: data
        })
        localStorage.setItem("plan", JSON.stringify(data))
    }

    const invest = async (user, id)=>{
            
            dispatch({
                type: USER_INVEST_REQUEST
            })

            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            if(localStorage.token){
                setAuthToken(localStorage.token)
            }
            try {
                const {data} = await axios.post(`/api/invest/invested`, user, config)
                dispatch({
                    type: USER_INVEST_SUCCESS,
                    payload: data
                })
                
            } catch (err) {
                dispatch({
                    type: USER_INVEST_FAIL,
                    payload: err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
                })
            }
    }

    const getInvest =  async (id) =>{
        console.log(id)
        dispatch({
            type: USER_GETINVEST_REQUEST
        })

        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }

        try {
            const {data} = await axios.get(`/api/invest/invested/${id}`, config)
            console.log(data)
            dispatch({
                type: USER_GETINVEST_SUCCESS,
                payload: data
            })
            
        } catch (err) {
            dispatch({
                type: USER_GETINVEST_FAIL,
                payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            })
        }
    }

    const postWithdrawalRequest = async (user) =>{
            dispatch({
                type: USER_POSTWITHDRAWAL_REQUEST,
            })
                    const config = {
                    headers:{
                        "Content-Type": "application/json"
                    }
                    }
                try {
                   const {data} = await axios.post("/api/payment/withdrawal", user, config) 
                   dispatch({
                       type: USER_POSTWITHDRAWAL_SUCCESS,
                       payload: data
                   })
                } catch (err) {
                    dispatch({
                        type: USER_POSTWITHDRAWAL_FAIL,
                        payload: err.response && err.response.data.message
                        ? err.response.data.message
                        : err.message
                    })
                }
                
            
    }

    const getWithdrawals = async (id) =>{
            
        dispatch({
            type: USER_GETWITHDRAWAL_REQUEST
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        try {
            const {data} = await axios.get(`/api/payment/withdrawal/${id}`, config)
            
            dispatch({
                type:USER_GETWITHDRAWAL_SUCCESS,
                payload: data
            })

        } catch (err) {
            dispatch({
                type:USER_GETWITHDRAWAL_FAIL,
                payload: err.response && err.reponse.data.message
                ? err.reponse.data.message
                : err.message
            })
            console.log(err.response)
            console.log(err.response.data.message)
        }

    }

    const adminGetAllWithdrawalsList = async () =>{
        dispatch({
            type: ADMIN_GET_ALL_WITHDRAWAL_LIST_REQUEST
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const {data} = await axios.get("/api/payment/withdrawal", config)
            dispatch({
                type: ADMIN_GET_ALL_WITHDRAWAL_LIST_SUCCESS,
                payload: data
            })
            
        } catch (err) {
            dispatch({
                type: ADMIN_GET_ALL_WITHDRAWAL_LIST_FAIL,
                payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            })
        }
    } 

    const deleteUserWithdrawalRequest = async (id)=>{
        dispatch({
               type: ADMIN_USER_DELETE_WITHDRAWAL_REQUEST
           })
       const config = {
           headers: {
               "Content-Type": "application/json"
           }
       }
           if(localStorage.token){
           setAuthToken(localStorage.token)
           
       try {
           
            await axios.delete(`/api/payment/withdrawal/${id}`, config)
           dispatch({
               type: ADMIN_USER_DELETE_WITHDRAWAL_SUCCESS,
               payload:id
           })
           
       } catch (err) {
           dispatch({
               type: ADMIN_USER_DELETE_WITHDRAWAL_FAIL,
              payload: err.response && err.response.data.message
               ? err.response.data.message 
               : err.message
           })
       }
   }
   }

   const adminUserWithdrawalUpdate = async ( user, id)=>{
    
    dispatch({
           type: ADMIN_USER_WITHDRAWAL_UPDATE_REQUEST
       })
   const config = {
       headers: {
           "Content-Type": "application/json"
       }
   }
       if(localStorage.token){
       setAuthToken(localStorage.token)
       
   try {
       
      const {data} = await axios.put(`/api/payment/withdrawal/${id}`, user, config)
      console.log(data)
       dispatch({
           type: ADMIN_USER_WITHDRAWAL_UPDATE_SUCCESS,
           payload: data
       })
       
   } catch (err) {
       dispatch({
           type: ADMIN_USER_WITHDRAWAL_UPDATE_FAIL,
         payload: err.response && err.response.data.message
           ? err.response.data.message 
           : err.message
       })
   }
}
}

const adminGetAllDepositsList = async () =>{
            
    dispatch({
        type: ADMIN_GET_ALL_USER_DEPOSITS_REQUEST
    })

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        const {data} = await axios.get(`/api/invest/deposit`, config)
        console.log(data)
        dispatch({
            type:ADMIN_GET_ALL_USER_DEPOSITS_SUCCESS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type:ADMIN_GET_ALL_USER_DEPOSITS_FAIL,
            payload: err.response && err.reponse.data.message
            ? err.reponse.data.message
            : err.message
        })
    }

}


const deleteInvestment = async (id)=>{
    console.log(id)
    dispatch({
           type: USER_DELETE_REQUEST
       })
  
       if(localStorage.token){
       setAuthToken(localStorage.token)
       
   try {
       
        await axios.delete(`/api/invest/${id}`)
       dispatch({
           type: USER_DELETE_SUCCESS,
           payload: id
       })

       console.log(dispatch(getInvest(id)))
       
   } catch (err) {
       dispatch({
           type: USER_DELETE_FAIL,
          payload: err.response && err.response.data.message
           ? err.response.data.message 
           : err.message
       })
   }
}
}



    return <AuthContext.Provider value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        editProfile: state.editProfile,
        user: state.user,
        message: state.message,
        allusers: state.allusers,
        success: state.success,
        plan: state.plan,
        userEdit: state.userEdit,
        userAdminUpdate: state.userAdminUpdate,
        invested: state.invested,
        userInvest: state.userInvest,
        getUserWithdrawalList: state.getUserWithdrawalList,
        admingetUserWithdrawalRequest: state.admingetUserWithdrawalRequest,
        adminGetAllWithdrawalsLists: state.adminGetAllWithdrawalsLists,
        deleteWithdrawalRequests: state.deleteWithdrawalRequests,
        adminUserWithdrawalUpdatee: state.adminUserWithdrawalUpdatee,
        adminGetAllDepositsListt: state.adminGetAllDepositsListt,
        registerUser,
        loaduser,
        logout,
        login,
        clearError,
        clearMessage,
        getUserDetails,
        listUsers,
        deleteUser,
        updateUser,
        userUpdateReset,
        setPlan,
        adminUserUpdate,
        invest,
        getInvest,
        postWithdrawalRequest,
        getWithdrawals,
        adminGetAllWithdrawalsList,
        deleteUserWithdrawalRequest,
        adminUserWithdrawalUpdate,
        adminGetAllDepositsList,
        deleteInvestment

    }}>
        {props.children}
        </AuthContext.Provider>

}

export default AuthState