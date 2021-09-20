import React from "react";
import {Link} from "react-router-dom";

const User_item = ({u, deleteU}) => {
    return <tr>
        <td>{u.name}</td>
        <td> {u.surname}</td>
        <td><Link className={'btn btn-primary ml-5'} to={`/user_edit/${u.id}`}>Edit</Link></td>
        <td>
            <button onClick={() => {
                deleteU(u.id)
            }} className={'btn btn-danger ml-5'}>Delete
            </button>
        </td>


    </tr>
}

export default User_item;