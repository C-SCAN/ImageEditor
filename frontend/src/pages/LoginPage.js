import React, { useState } from "react";
import {Link} from "react-router-dom";
import BasePage from "./BasePage";
import '../styles/LoginPage.css'
import Spinner from '../components/Spinner'

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] =useState('');

    async function loginClickHandler(){
        setLoading(true);
            try{
                const response = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: name, email: email, password: password  })
                });
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false); 
            }
    }
    async function signUpClickHandler(){
        setLoading(true);
        setTimeout( async ()=>{
            try{
                const response = await fetch('http://localhost:3000/api/signUp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: name, email: email, password: password  })
                });
                if (!response.ok) {
                    throw new Error('singUp failed');
                }
                
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false); 
            }
        }, 3000);
    }
    return (
        <BasePage>
        {loading? <Spinner/>
        :
        <div class="login">

        <form action="" class="login__form">
           <h1 class="login__title">Login</h1>

           <div class="login__inputs">
              <div class="login__box">
                 <input type="email" placeholder="Email ID" required class="login__input"/>
                 <i class="ri-mail-fill"></i>
              </div>

              <div class="login__box">
                 <input type="password" placeholder="Password" required class="login__input"/>
                 <i class="ri-lock-2-fill"></i>
              </div>
           </div>

           <div class="login__check">
              <div class="login__check-box">
                 <input type="checkbox" class="login__check-input" id="user-check"/>
                 <label for="user-check" class="login__check-label">Remember me</label>
              </div>

              <a href="#" class="login__forgot">Forgot Password?</a>
           </div>

           <button type="submit" class="login__button">Login</button>

           <div class="login__register">
              Don't have an account? <Link to="/signUp">Register</Link>
              </div>
         </form>
      </div>
        }
        </BasePage>
    );
}