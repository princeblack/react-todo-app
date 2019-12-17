import React from 'react';
import checklist from '../images/checklist.png';

function Navigation() {
    return(
        <div className="nav-app">
            <h1 className ="app-title">TODO APP
            <img src={checklist} alt ="Logo" className="logo"/>
            </h1>
        </div>
    )
}
export default Navigation;