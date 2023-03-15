import React from 'react';
import "./ipad.css"

function Ipad() {
  return (
    <>
    <div className="second-div">
          <div className="imgSection">
            <div className="phoneimg">
              <img className="ipad" src="../iPad.png" alt="img" />
            </div>
          </div>

          <div className="TextSection">
          <img className="logo" src="../Charzit1.png" alt="img" />
            <h1 className="ipad-heading">
              <span>Smart App Loded With</span>
              <span className="greenText"> Smart Feature</span>
            </h1>
            <p className="desc">
              CharzIT® Smart App is fully loaded with interactive features
            </p>
            <a href="www.google.com">
              <img className="ios-btn" src="../ios.png" alt="img" />
            </a>

            <a href="www.google.com">
              <img className="ios-btn" src="../android.png" alt="img" />
            </a>
          </div>
        </div>
    </>
  )
}

export default Ipad