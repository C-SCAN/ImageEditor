import React from "react";
import '../styles/LoginField.css'

export default function LoginField(props){
    return (
        <div className="login-field">
            <label>{props.type}:</label>
            <input type="text" id={props.type} name={props.type}/>
        </div>
    );
}