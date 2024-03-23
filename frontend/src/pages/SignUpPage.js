import React, { useState } from "react";
import BasePage from "./BasePage";
import '../styles/LoginPage.css'
import Spinner from '../components/Spinner'

export default function SignUpPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] =useState('');

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
           <h1 class="login__title">SignUp</h1>
           
           <div class="login__inputs">
           <div class="login__box">
                 <input type="name" placeholder="Name" required class="login__input" onchange={(e)=> setName(e.target.value)}/>
                 <i class="ri-mail-fill"></i>
              </div>
              <div class="login__box">
                 <input type="email" placeholder="Email ID" required class="login__input" onchange={(e)=> setEmail(e.target.value)}/>
                 <i class="ri-mail-fill"></i>
              </div>

              <div class="login__box">
                 <input type="password" placeholder="Password" required class="login__input" onChange={(e)=> setPassword(e.target.value)}/>
                 <i class="ri-lock-2-fill"></i>
              </div>
           </div>
           <button type="submit" class="login__button" onClick={signUpClickHandler}>SignUp</button>
         </form>
      </div>
        }
        </BasePage>
    );
}