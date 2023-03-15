import React from 'react';
import "./cards.css";
import { FaSearch } from "react-icons/fa";
import { IoOptionsOutline } from "react-icons/io5";
import { FaChargingStation } from "react-icons/fa";
import { FiBatteryCharging } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
 import { FaHistory } from "react-icons/fa";
 
function Cards() {
  return (
    <>
    <div>
          <h1 className="card-title">
            How do <span className="greenText">we</span> Work ?
          </h1>
          <p className="card-subtitle">
            this essay contains a description of a thing / situation so that the
            reader seems to see, hear
          </p>
        </div>

        <div className="card">
          <div className="card-container">
            <div className="card-body">
              <div className='icons'>
              <FaSearch/>
              </div>
              <h3 className="card-in">find nearby charge spot </h3>
              <p>"Easily locate the nearest EV charging station with our user-friendly map feature"</p>
            </div>
            <div className="card-body">
              <div className='icons'>
              <IoOptionsOutline/>
              </div>
              <h3 className="card-in">Charging Options</h3>
              <p>"Power up your EV with our flexible charging options" </p>
            </div>
            <div className="card-body">
              <div className='icons'>
                <FiBatteryCharging/>
                </div>
              <h3 className="card-in">Start Charging</h3>
              <p>"Get your EV charged up with our simple process"</p>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="card-container">
            <div className="card-body">
              <div className='icons'>
                <FaSave/>
                </div>
              <h3 className="card-in">Save EV Information</h3>
              <p>"Save your EV information for a seamless charging experience"</p>
            </div>
            <div className="card-body">
              <div className='icons'>
                <FaHistory/>
                </div>
              <h3 className="card-in">Get charging History</h3>
              <p>"Track your EV charging history with ease" </p>
            </div>
            <div className="card-body">
            <div className='icons'>
              <FaChargingStation/>
              </div>
              <h3 className="card-in">See charging Station</h3>
              <p>"Book a slot and start charging the car"</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cards