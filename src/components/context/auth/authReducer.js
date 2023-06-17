import {LOGIN_FAIL, LOGIN_SUCCESS, REGISTRATION_FAIL, REGISTRATION_REQUEST, 
    REGISTRATION_SUCCESS, USER_LOADED, AUTH_ERROR,LOGOUT, CLEAR_MESSAGE, 
     CLEAR_ERROR, LOGIN_REQUEST, UPDATE_USER_DETAILS_REQUEST, 
     UPDATE_USER_DETAILS_SUCCESS, UPDATE_USER_DETAILS_FAIL,
      USER_LIST_SUCCESS, USER_LIST_REQUEST, USER_LIST_FAIL, 
      USER_LIST_RESET, USER_DELETE_REQUEST, USER_DELETE_SUCCESS,
       USER_DELETE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, 
       USER_UPDATE_FAIL, USER_UPDATE_RESET, USER_SETPLAN, USER_ADMIN_USER_UPDATE_REQUEST,
        USER_ADMIN_USER_UPDATE_SUCCESS, USER_ADMIN_USER_UPDATE_FAIL, 
        USER_INVEST_SUCCESS, USER_INVEST_REQUEST, USER_INVEST_FAIL, USER_GETINVEST_REQUEST,
         USER_GETINVEST_FAIL, USER_GETINVEST_SUCCESS, USER_POSTWITHDRAWAL_REQUEST, 
         USER_POSTWITHDRAWAL_SUCCESS, USER_POSTWITHDRAWAL_FAIL, USER_GETWITHDRAWAL_REQUEST,
          USER_GETWITHDRAWAL_SUCCESS, USER_GETWITHDRAWAL_FAIL, ADMIN_GET_ALL_WITHDRAWAL_LIST_REQUEST,
           ADMIN_GET_ALL_WITHDRAWAL_LIST_SUCCESS, ADMIN_GET_ALL_WITHDRAWAL_LIST_FAIL, 
           ADMIN_USER_DELETE_WITHDRAWAL_REQUEST, ADMIN_USER_DELETE_WITHDRAWAL_SUCCESS, 
           ADMIN_USER_DELETE_WITHDRAWAL_FAIL, ADMIN_USER_WITHDRAWAL_UPDATE_REQUEST, 
           ADMIN_USER_WITHDRAWAL_UPDATE_SUCCESS, ADMIN_USER_WITHDRAWAL_UPDATE_FAIL, ADMIN_GET_ALL_USER_DEPOSITS_REQUEST, ADMIN_GET_ALL_USER_DEPOSITS_FAIL, ADMIN_GET_ALL_USER_DEPOSITS_SUCCESS} from "../../types"

const reducer = (state, action)=>{
    switch(action.type){
        case REGISTRATION_REQUEST:
        case LOGIN_REQUEST:    
        return{
            ...state,
            loading: true
        }
        case REGISTRATION_SUCCESS: 
        case LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.token)
        return{
            ...state,
             ...action.payload, 
             isAuthenticated: true,
              loading: false
            }

        case LOGOUT:
            localStorage.removeItem("token")
            
            return{
                ...state,
                token:null,
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
            invested: {},
            userInvest: [],
            getUserWithdrawalList: []
            }

        case REGISTRATION_FAIL:
        case LOGIN_FAIL:
            case AUTH_ERROR:
             localStorage.removeItem("token")
        return{
            ...state,
             token:null,
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
            invested: {},
            userInvest: [],
            getUserWithdrawalList: []  
        }

        case USER_LOADED : return{
            ...state,
            isAuthenticated: true,
            loading:false,
            user: action.payload
        }
        
        case CLEAR_ERROR: return{
            ...state,
            error: null
        } 

        case CLEAR_MESSAGE: return{
            ...state,
            message: null
        }
        case UPDATE_USER_DETAILS_REQUEST: 
        return{
            ...state,
            loading: true
        }
        case UPDATE_USER_DETAILS_SUCCESS: 
        return{
            ...state,
            editProfile: action.payload,
            loading: false
        }
        case UPDATE_USER_DETAILS_FAIL:
            return{
                ...state,
                error: action.payload,
                loading: false
            }

        case USER_LIST_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_LIST_SUCCESS:
            return{
                ...state,
                loading: false,
                allusers: action.payload
            }
        case USER_LIST_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_LIST_RESET:
            return{
                ...state,
                allusers: []
            }

        case USER_DELETE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_DELETE_SUCCESS:
            return{
                ...state,
                loading: false,
                allusers: action.payload
            }
        case USER_DELETE_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_UPDATE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_UPDATE_SUCCESS:
            return{
                ...state,
                loading: false,
                success: true,
                userEdit: action.payload
            }
        case USER_UPDATE_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_UPDATE_RESET:
            return{
                ...state,
                user:{}
            }
        case USER_SETPLAN:
            return{
                ...state,
                plan: action.payload
            }
        case USER_ADMIN_USER_UPDATE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_ADMIN_USER_UPDATE_SUCCESS:
            return{
                ...state,
                loading: false,
                userAdminUpdate: action.payload,
            }
        case USER_ADMIN_USER_UPDATE_FAIL:
            return{
                ...state,
                error: action.payload
            }

              case USER_INVEST_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_INVEST_SUCCESS:
            return{
                ...state,
                loading: false,
                invested: action.payload,
            }
        case USER_INVEST_FAIL:
            return{
                ...state,
                error: action.payload
            }

               case USER_GETINVEST_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_GETINVEST_SUCCESS:
            return{
                ...state,
                loading: false,
                userInvest: [action.payload]
            }
        case USER_GETINVEST_FAIL:
            return{
                ...state,
                error: action.payload
            }

        case USER_POSTWITHDRAWAL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_POSTWITHDRAWAL_SUCCESS:
            return{
                ...state,
             isAuthenticated: true,
              loading: false

            }
        case USER_POSTWITHDRAWAL_FAIL:
            return{
                ...state,
                error: action.payload
            }

            case USER_GETWITHDRAWAL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_GETWITHDRAWAL_SUCCESS:
            return{
                ...state,
             isAuthenticated: true,
              loading: false,
              getUserWithdrawalList: [action.payload],
              admingetUserWithdrawalRequest: action.payload

            }
        case USER_GETWITHDRAWAL_FAIL:
            return{
                ...state,
                error: action.payload
            }
        
        case ADMIN_GET_ALL_WITHDRAWAL_LIST_REQUEST:
            return{
                ...state,
                loading: true
            }
        case ADMIN_GET_ALL_WITHDRAWAL_LIST_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    adminGetAllWithdrawalsLists : action.payload,
                }
        case ADMIN_GET_ALL_WITHDRAWAL_LIST_FAIL:
                return{
                    ...state,
                    error: action.payload
                }
        case ADMIN_USER_DELETE_WITHDRAWAL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADMIN_USER_DELETE_WITHDRAWAL_SUCCESS:
            return{
                ...state,
                loading: false,
                deleteWithdrawalRequests: state.deleteWithdrawalRequests.filter(user => user._id !== action.payload)
            }
        case ADMIN_USER_DELETE_WITHDRAWAL_FAIL:
            return {
                ...state,
                error: action.payload
            }
            case ADMIN_USER_WITHDRAWAL_UPDATE_REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case ADMIN_USER_WITHDRAWAL_UPDATE_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    adminUserWithdrawalUpdatee: action.payload
                }
            case ADMIN_USER_WITHDRAWAL_UPDATE_FAIL:
                return {
                    ...state,
                    error: action.payload
                }
                case ADMIN_GET_ALL_USER_DEPOSITS_REQUEST:
                    return {
                        ...state,
                        loading: true
                    }
                case ADMIN_GET_ALL_USER_DEPOSITS_SUCCESS:
                    return{
                        ...state,
                        loading: false,
                        adminGetAllDepositsListt: action.payload
                    }
                case ADMIN_GET_ALL_USER_DEPOSITS_FAIL:
                    return {
                        ...state,
                        error: action.payload
                    }
        default: return state
    }
}
export default reducer