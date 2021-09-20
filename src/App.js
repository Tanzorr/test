import './App.css';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Users_list from "./components/Users_list";
import User_form from "./components/User_form";
import User_edit from "./components/User_edit";
import React from "react";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <div className="row mt-5">
                        <h1>Test app</h1>
                    </div>
                </div>
                <Route exact path='/' component={Users_list}></Route>
                <Route  path='/user_form/' component={User_form}/>
                <Route  path='/user_edit/:id' component={User_edit}/></div>
        </Router>
    );
}

export default App;
