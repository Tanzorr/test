import React, {useEffect} from "react";
import {connect} from "react-redux";
import User_item from "./User_item";
import {NavLink} from 'react-router-dom';
import {fetchUsers, setCurrentPageAC, setCurrentUsersAC, deleteUserStartAC} from "../redux/user/user.action";
import {currentUsersGets} from "../helpers/helper";


const Users_list = ({
                        users, pageSize, totalUsersCount, currentPage, currentUsers,
                        fetchUsers, setCurrentPageAC, setCurrentUsersAC, deleteUserStartAC
                    }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesList = pages.map((p, i) => {
        return <li key={i} className={currentPage === p ? 'active' : ''}><a onClick={() => {
            setCurrentPageAC(p)
        }} href="#">{p}</a></li>
    })

    useEffect(() => {
        fetchUsers();
    }, []);


    useEffect(() => {
        setCurrentUsersAC(
            currentUsersGets(
                pageSize,
                currentPage,
                users
            )
        );
    }, [currentPage, users, pageSize]);

    let usersList = currentUsers.map((u, i) => {
        return <User_item key={i} u={u} deleteU={deleteUserStartAC}/>;
    })
    return <div>
        <div className="container">
            <div className="row"> <h2>Users list</h2></div>
            <div className="row"> <NavLink to='/user_form' className="btn btn-success mb-5">Add User</NavLink></div>
            <table className={'w-100 table table-striped'}>
                <thead>
                </thead>
                <tbody>
                {usersList}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
            <div className="row mt-5">
                <ul className={'pagination justify-content-center w-100'} >
                    {pagesList}
                </ul>
            </div>
        </div>

    </div>

}


const mapStateToProps = state => ({
    users: state.user.users,
    pageSize: state.user.pagesSize,
    totalUsersCount: state.user.totalUsersCount,
    currentPage: state.user.currentPage,
    currentUsers: state.user.currentUsers

});

export default connect(mapStateToProps, {
    fetchUsers,
    setCurrentPageAC,
    setCurrentUsersAC,
    deleteUserStartAC
})(Users_list);