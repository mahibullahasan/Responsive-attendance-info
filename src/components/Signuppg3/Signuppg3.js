import React from 'react';
import img1 from "./../../images/logo.png";
import img2 from "./../../images/body.jpg";
import "./Signuppg3.css"

const Signuppg3 = () => {
    return (
        <div>
            <div >
                <img src={img1} alt="" className='img-logoo'/>
            </div>
            <div>
                <img src={img2} alt="" className='img-body' />
            </div>
            <div className='signup-section'>
                <div>
                    <h1 className='signup-title'>SignUp Form</h1>
                </div>
                <div className='input-part'>
                    <input type="password" placeholder='Write Password' className='input-password'/>
                    <br />
                    <small>Your Password must be 8 character</small>
                </div>
                
                <div>
                <button className='back-btn'>Back</button>
                </div>
                
                
                <div className='next-btn'>
                
                    <button className='next-btnn'>Sign Up</button>
                    
                </div>
                <div className='loginn-btn'>
                    <small>Already here an account?</small> 
                    <button>LOGIN HERE!</button>
                </div>

            </div>
        </div>
    );
};

export default Signuppg3;