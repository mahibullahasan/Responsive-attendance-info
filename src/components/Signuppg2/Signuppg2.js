import React, { useState } from 'react';
import img1 from "./../../images/logo.png";
import img2 from "./../../images/body.jpg";
import "./Signuppg2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import 'react-phone-number-input/style.css'
import PhoneInput   from 'react-phone-number-input'


const Signuppg2 = () => {
    const [value, setValue] = useState()
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
                    <PhoneInput placeholder="Enter phone number"value={value}onChange={setValue}/>
                    <br />
                    <input type="email" placeholder='Write Email Address' className='input-text'/>
                    <br />
                </div>
                <div>
                <button className='back-btn'>Back</button>
                </div>
                
                
                <div className='next-btn'>
                
                    <button className='next-btnn'>Next Step <FontAwesomeIcon icon={faArrowRight} /></button>
                    
                </div>
                <div className='loginn-btn'>
                    <small>Already here an account?</small> 
                    <button>LOGIN HERE!</button>
                </div>

            </div>

            
            
        </div>
       
    );
};

export default Signuppg2;