import React from "react";
import Navbar from "./../components/Navbar";
import "./contactus.css";
function ContactUs() {
  const btnClick = () => {
    alert("Thank You for reaching us. We will Contact you soon !!!!!!");
  };
  return (
    <>
      <Navbar />
      <div className="contact-div">
        <h1 className="heading">
          Get in <span className="touch">Touch</span>
        </h1>
        <h4 className="subheading">send a message</h4>
        <p className="text">
          You can contact us by sending an email or cotnacting us at our phone
          number. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.{" "}
        </p>

        <div className="form">
          <p className="first-name">First Name</p>
          <p className="last-name">Last Name</p>
          <p className="phone-number">Phone Number</p>
          <p className="email-adress">Email Adress</p>
          <p className="message">Message</p>

          <input className="first-input" type="text" required autoFocus />
          <input className="last-input" type="text" required autoFocus />
          <input className="contact-input" type="text" required autoFocus />
          <input className="email-input" type="text" required autoFocus />
          <textarea className="message-input" autoFocus />
          <button className="button" onClick={() => btnClick()}>
            Submit Info
          </button>
        </div>

        <div className="line"></div>

        <h3 className="title1">Call Us </h3>
        <p className="desc1">
          Contact us by calling on our helpline number for any problem you face.{" "}
        </p>
        <p className="section1"> +91 9175970454</p>

        <h3 className="title2">Visit Us</h3>
        <p className="desc2">
          CHARZIT PRIVATE LIMITED<br></br> S No. 81 FL No. 09 Indira Memories,
          Next to NEXA ShowRoom Sakal Nagar, Pune , Maharashtra , India, 411007
        </p>

        <h3 className="title3">Chat With Us</h3>
        <p className="desc3">
          Give your important feedback at given gmail to imporve our costomer
          interaction.
        </p>
        <p className="section3">contact@charzit.com</p>
      </div>
    </>
  );
}

export default ContactUs;
