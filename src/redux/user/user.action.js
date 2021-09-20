import {UserActionTypes} from "./user.action.types";

export const getUsers =(payload)=>{
    return{
        type:UserActionTypes.GET_USERS,
        payload
    }
}

export const getUser =(payload)=>{
    return{
        type:UserActionTypes.GET_USER,
        payload
    }
}

export const setCurrentPageAC = (payload)=>{
    return{
        type:UserActionTypes.SET_CURRENT_PAGE,
        payload
    }
}

export const setCurrentUsersAC = (payload)=>{
    return{
        type:UserActionTypes.SET_CURRENT_USERS,
        payload
    }
}

export const setDataInputAc = (payload)=>{
    return{
        type:UserActionTypes.SET_DATA_INPUT,
        payload
    }
}

export const setUserStartAC =(payload)=>{
    return{
        type:UserActionTypes.SET_USER_START,
        payload
    }
}


export const setUserSuccessAC =(payload)=>{
    return{
        type:UserActionTypes.SET_USER_SUCCESS,
        payload
    }
}


export const setUserFailAC =(payload, error)=>{
    return{
        type:UserActionTypes.SET_USER_FAIL,
        payload,
        error
    }
}

export const editUserStartAC =(payload, id)=>{
    console.log(id,payload)
    return{
        type:UserActionTypes.EDIT_USER_START,
        payload,
        id
    }
}


export const editUserSuccessAC =(payload, id)=>{
    return{
        type:UserActionTypes.EDIT_USER_SUCCESS,
        payload,
        id
    }
}

export const deleteUserStartAC =(payload)=>{
    return{
        type:UserActionTypes.DELETE_USER_START,
        payload,
    }
}

export const deleteUserSuccessAC =(payload)=>{
    return{
        type:UserActionTypes.DELETE_USER_SUCCESS,
        payload
    }
}


export const fetchUsers =()=>{
    return{
        type:UserActionTypes.FETCH_USERS
    }
}