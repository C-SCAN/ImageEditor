import React from "react";
import LoginField from '../components/LoginField'
import BasePage from "./BasePage";
import '../styles/LoginPage.css'

export default function LoginPage(){

    function loginClickHandler(){
        
    }
    function signUpClickHandler(){

    }
    return (
        <BasePage>
        <div className="login-window">
            <LoginField type="Username"/>
            <LoginField type="Password"/>
            <button className="button login-button" onClick={loginClickHandler}> Login</button>
            <button className="button signup-button" onClick={signUpClickHandler}> SignUp</button>
        </div>
        </BasePage>
    );
}