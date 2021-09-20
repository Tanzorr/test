import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setDataInputAc, setUserStartAC, setUserFailAC, editUserStartAC,} from "../redux/user/user.action";
import {validator} from "../helpers/validator";
import { useHistory } from "react-router-dom";


const User_form = ({
                       user, id, error, errorMessage,
                       setDataInputAc, setUserStartAC, setUserFailAC, editUserStartAC
                   }) => {
    let history = useHistory();


    useEffect(()=>{
        setUserFailAC('', false);
    },[])

    const changeInputHandler = (e) => {
        let {name, value} = e.target;
        setDataInputAc({
            [name]: value
        });
    }

    const userClear = () => {
        for (let key in user) {
            setDataInputAc({
                [key]: ""
            })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!validator(user)) {
            if (id) {
                editUserStartAC(user, id);
            } else {
                setUserStartAC(user);
            }
            history.push('/')
            userClear()
        } else {
            setUserFailAC(validator(user), true)
        }
    }

    return <div className='container'>
        <div className={'errors'}>{error ? errorMessage : ""}</div>
        <form onSubmit={submitHandler} id='form'>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                       className="form-control"
                       name="name"
                       value={user.name}
                       onChange={changeInputHandler}
                       id="name"
                       placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label htmlFor="surname">Sur Name</label>
                <input type="text"
                       className="form-control"
                       id="surname"
                       value={user.surname}
                       onChange={changeInputHandler}
                       name='surname'
                       placeholder="surname"/>
            </div>
            <div className="form-group">
                <label htmlFor="desc">desc</label>
                <input type="text"
                       value={user.desc}
                       onChange={changeInputHandler}
                       className="form-control"
                       id="desc" name='desc'
                       placeholder="desc"/>
            </div>
            <div className="form-group">
                <label htmlFor="avatar">avatar</label>
                {
                    id && <img src={user.avatar}/>
                }

                <input type="file"
                       className="form-control"
                       id="avatar"
                       name='avatar'/>
            </div>
            <div className="btns">
                <button type="submit" className="btn btn-primary ">Submit</button>
                <Link className={'btn btn-success  '} to={'/'}>Back to list</Link>
            </div>
        </form>
    </div>
}

const mapStateToProps = state => ({
    user: state.user.user,
    error: state.user.error,
    errorMessage: state.user.errorMessage
});

export default connect(mapStateToProps, {
    setDataInputAc,
    setUserStartAC,
    editUserStartAC,
    setUserFailAC
})(User_form);