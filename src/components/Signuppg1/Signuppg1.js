import React from 'react';
import img1 from "./../../images/logo.png";
import img2 from "./../../images/body.jpg";
import "./Signuppg1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'




const Signuppg1 = () => {
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
                    <input type="text" placeholder='Enter first name' className='input-text'/>
                    <br />
                    <input type="text" placeholder='Enter last name' className='input-text'/>
                    <br />
                </div>
                <div className='next-btn'>
                
                <button 
                    className='next-btnn'>Next Step<FontAwesomeIcon icon={faArrowRight} />
                </button> 
                
                
                   
                </div>

                <div className='loginn-btn'>
                    <small>Already here an account?</small> 
                    <button><a href="login-here">LOGIN HERE!</a></button>
                </div>

            </div>

            
            
        </div>
    );
     
};

export default Signuppg1;