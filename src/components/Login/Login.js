import React from 'react';
import "./Login.css"
import img1 from "./../../images/logo.png";
import img2 from "./../../images/body.jpg";


const Login = () => {
    return (
        <div>
            <div >
                <img src={img1} alt="" className='img-logo'/>
            </div>
            <div>
                <img src={img2} alt="" className='img-body' />
            </div>
            <div className='login-section'>
                <div>
                    <h3 className='login-title'>Log in Form</h3>
                </div>
                <div className='input-part'>
                    <input type="text" placeholder='Write Email Address' className='input-text'/>
                    <br />
                    <input type="password" placeholder='Write Password' className='input-password'/>
                    <br />
                    <small>Your password must be 8 character</small>
                </div>
                <div className='login-btn'>
                    <button className='login-btnn'>Log In</button>
                </div>
                <div className='sign-btn'>
                    <small>Don't have an account?</small> 
                    <button>SIGNUP HERE!</button>
                </div>

            </div>

            
            
        </div>

        
    );
};

export default Login;