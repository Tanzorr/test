import {UserActionTypes} from "./user.action.types";
import api from "../../api/api";

const INITIAL_STATE ={
    users:[],
    pagesSize:5,
    totalUsersCount:0,
    currentUsers:[],
    currentPage:1,
    user:{
        id:null,
        name:"",
        surname:"",
        desc:"",
        avatar:null
    },
    error:false,
    errorMessage:''
}

let userReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case UserActionTypes.GET_USERS:
            return {
                ...state,
                users: action.payload,
                totalUsersCount: action.payload.length,
            }
        case UserActionTypes.GET_USER:
            return {
                ...state,
                user: state.users.find((u)=>{
                    if(u.id == action.payload){
                        return u.id
                    }
                }),
            }
        case UserActionTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case UserActionTypes.SET_CURRENT_USERS:
            return {
                ...state,
                currentUsers: action.payload
            }
        case UserActionTypes.SET_DATA_INPUT:
            return {
                ...state,
                user: Object.assign({}, state.user, action.payload)
            }
        case UserActionTypes.SET_USER_SUCCESS:
            return {
                ...state,
                users: [...state.users,action.payload]
            }
        case UserActionTypes.EDIT_USER_SUCCESS:

            return {
                ...state,
                users:state.users.map((u, i)=>{
                    if(u.id == action.id){
                        return u = action.payload
                    }else {
                        return  u
                    }
                })
            }
        case UserActionTypes.SET_USER_FAIL:
            return {
                ...state,
                error: action.error,
                errorMessage: action.payload
            }
        case UserActionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                users: state.users.filter((user)=>{
                    if(user.id !== action.payload){
                        return user;
                    }
                })
            }
    }
    return state;
}

export default userReducer;