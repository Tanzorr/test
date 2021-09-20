import React from "react";
import {Link} from "react-router-dom";

const User_form=()=>{
    return <div className='container'>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control"  nane="name" id="name" placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Sur Name</label>
                <input type="text" className="form-control" id="surname" name='surname' placeholder="surname"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">desc</label>
                <input type="text" className="form-control" id="desc" name='desc' placeholder="desc"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">avatar</label>
                <input type="file" className="form-control" id="desc" name='avatar' />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to={'/'}>list User</Link>
        </form>
    </div>
}

export default User_form;