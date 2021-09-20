import React,{useEffect} from "react";
import {connect} from "react-redux";
import User_item from "./User_item";
import {NavLink}  from 'react-router-dom';
import {fetchUsers} from "../redux/user/user.action";


const Users_list = ({users, getUsers}) => {
    useEffect(()=>{
        getUsers()
    },[]);
    console.log(users)
    let usersList = users.map((u, i)=>{
       return <User_item key={i} u={u}/>;
    })
    return <div className='container'>
        <div className="row">
            <NavLink to='/user_form' className="brn btn-success">Add User</NavLink>
        </div>
        <div className="row">
            <ul className="list-group">
                {usersList}
            </ul>
        </div>
    </div>
}


const mapStateToProps = state =>({
    users:state.user.users,

});

export default connect(mapStateToProps,{
    getUsers: fetchUsers
})(Users_list);