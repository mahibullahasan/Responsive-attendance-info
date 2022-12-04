import React from 'react';
import img1 from "./../../images/logo.png";
import "./Attendance.css"

const Attendance = () => {
    return (
        <div>
            <div >
                <img src={img1} alt="" className='attend-logo'/>
            </div>
            <div >
                <h3 className='attend-info'>Attendance Information</h3>
            </div>
        </div>
    );
};

export default Attendance;