import React from "react";

const User_item =({u})=>{
    return<div>
        <li className='list-group-item'>
            <span>{u.name}</span>
            <span> {u.surname}</span>
        </li>
    </div>
}

export default User_item;