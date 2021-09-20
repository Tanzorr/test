import React, {useEffect} from "react";
import User_form from "./User_form";
import {connect} from "react-redux";
import {useParams} from 'react-router-dom';
import {fetchUsers, getUser} from "../redux/user/user.action";




const User_edit =({getUser,  fetchUsers})=>{
    const {id} = useParams();
    useEffect(()=>{
        fetchUsers();
        setTimeout(()=>{
            getUser(id);
        },100)

    },[]);
    return <div>
        <User_form id={id}/>
    </div>
}

export default connect(null, {
    getUser,
    fetchUsers
})(User_edit);
