import React from "react";
// import { IoLogoGooglePlaystore } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
import Cards from "./../components/Cards";
import Review from "./../components/Review";
import Faq from "./../components/Faq";
import "./homescreen.css";
import Ipad from "../components/Ipad";
function HomeScreen() {
  return (
    <>
    <div className="home-div">
      <Navbar />
      <div className="first-div">
        <h3 className="subheading-div1">Go electric , Go everyWhere</h3>
        <h1 className="home-heading">
          <span>EV Charging</span>
          <span className="greenText"> Solutions </span>
          <span>Where you like it </span>
        </h1>
        <p className="desc-div1">
          We empower forward-thingking businesses to build a sustainable future
          by providing flexible and scalable electric vehicle charging
          solution.
        </p>
        <h2 className="download-text">Download Now</h2>

        <a href="https://www.youtube.com/">
          <div className="btn-div">
            {/* <img className="btn" alt="" src="../google-play@2x.png" /> */}
            <FaGooglePlay className="btn"/>
          </div>
        </a>

        <a href="https://www.youtube.com/">
          <div className="btn-div">
            <FaApple className="btn" />
          </div>
        </a>
      </div>
      </div>

       {/* second div */}
       <div className="second-div">
          <div className="imgSection">
            <img className="img" src="../charging.png" alt="car-img" />
          </div>

          <div className="TextSection">
            <h1 className="div2-heading">
              <span>Find Charging Station From</span>
              <span className="greenText"> Variety of </span>
              <span>Brands</span>
            </h1>
            <p className="div2-desc">
             Get Location-based mapping to find the nearest charging station.<br></br>
            Option to reserve a charging spot in advance.<br></br>
            User-friendly interface for easy payment and charging management
            </p>
          </div>
        </div>


 {/* third div */}

           <div className="second-div">
          <div className="TextSection">
            <h1 className="div3-heading">
              <span>Many</span>
              <span className="greenText"> Benifit </span>
              <span>that You give Directly to Nature</span>
            </h1>
            <p className="div3-desc">
              By reducing carbon emissions you can have a positive impact when
              using electric car technology.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat
            </p>
          </div>
          <div className="imgSection">
            {/* <IoLogoGooglePlaystore/> */}
            <img className="img31" src="../div31.png" alt="img" />
            <img className="img32" src="../div32.png" alt="img" />
          </div>
        </div>


       {/* Number animation  */}
       <div className="number-animation">
          <div>
            <h1>4000+</h1>
            <h3>charging Stations</h3>
          </div>

          <div>
            <h1>2000+</h1>
            <h3>Active User</h3>
          </div>

          <div>
            <h1>5000+</h1>
            <h3>Charging Sections</h3>
          </div>
        </div>

        
      <Ipad/>
      <Cards />
      <Review />
      <Faq />
      <br></br>
      <Footer />
    </>
  );
}

export default HomeScreen;



 
