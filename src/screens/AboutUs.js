import React from "react";
import Navbar from "../components/Navbar";
import "./aboutus.css";
import Footer from "../components/Footer";
function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="start">
        <h3 className="about">About Us</h3>
        <h1 className="first-heading">Our Wonderful Partners</h1>
      </div>

      {/* first div */}
      <div className="div-first">
        <div className="img-area">
          {/* <img className="story-section-child" alt="" src="../group-3.svg" /> */}
          <img className="group-img" alt=" iamge" src="../group1.png" />
        </div>

        <div className="text-area">
          <h1 className="second-heading">
            Our <span className="green">Story</span>
          </h1>
          <p className="first-desc">
            Welcome to Charzit, the premier EV charging app for drivers
            all around the world. Our journey began with a simple yet powerful
            idea – to create a sustainable and eco-friendly transportation
            system for generations to come. As electric vehicle owners
            themselves, they experienced firsthand the challenges and
            limitations of finding reliable and accessible charging stations.
            They knew that EV owners needed a better way to find and utilize
            charging stations, and that’s how the idea for Charzit was
            born. With a mission to make electric vehicle ownership more
            accessible and convenient, our founders worked tirelessly to develop
            a user-friendly platform that would allow drivers to quickly and
            easily find charging stations and plan their trips accordingly.
          </p>
        </div>
      </div>

      <br></br>

      {/* second div */}

      <div className="div-first">
        <div className="text-area">
          <h1 className="third-heading">
            Meet the <span className="green">Team</span>
          </h1>
          <p className="text2">
            At Charzit, we are proud to have a team of talented and dedicated
            professionals who share our passion for creating a sustainable and
            eco-friendly future. Our team is comprised of individuals with
            diverse backgrounds and skillsets, all working together towards a
            common goal. Saurabh Gawade and Raj Kalkute, our co-founders, bring
            a wealth of experience and expertise in the EV industry. Their
            vision and leadership have been instrumental in shaping our company
            and driving our success. [Team Member Name 1], our Chief Technology
            Officer, is responsible for overseeing the development and
            maintenance of our app and platform. With years of experience in
            software engineering and a passion for innovation, [Team Member Name
            1] has played a key role in our platform's development. [Team Member
            Name 2], our Chief Marketing Officer, is responsible for developing
            and executing our marketing and outreach strategies. With a
            background in digital marketing and a deep understanding of our
            target audience, [Team Member Name 2] has been instrumental in
            growing our user base.
          </p>
        </div>

        <div className="img-area">
          <img className="person1" alt="" src="../team1.png" />
          <img className="person2" alt="" src="../team2.png" />
          <img className="person3" alt="" src="../team3.png" />
        </div>
      </div>

      {/* third div */}
      <br></br>
      <br></br>
      <br></br>
      <div className="div-first">
        <div className="img-area">
          <img className="founder-img" alt="" src="../mask-group4@2x.png" />
        </div>

        <div className="text-area">
          <h3 className="fourth-heading">
            Meet the <span className="green">Co-Founder</span>
          </h3>
          <h1>Mr. Saurabh Gawade</h1>
          <h4 className="cofounder">Co-Founder</h4>
          <p className="third-desc">
            Saurabh Gawade, founder of Charzit, is an accomplished entrepreneur
            with a passion for Electric vehicle. With 5 years of experience in
            Vehicals , Saurabh has built a reputation as an innovative thinker
            and problem solver.Saurabh held key leadership roles at [related
            companies/organizations]. It was during this time that Saurabh
            identified a need for Chargable Electric Vehicals, and began to
            develop the concept for Charzit. Drawing upon Saurabh's extensive
            knowledge and expertise, Charzit has quickly become a leading
            destination for EV users. By combining cutting-edge technology with
            exceptional customer service, Saurabh has created a platform that is
            both user-friendly and effective.
          </p>
        </div>
      </div>

      <div className="div-first">
        <div className="text-area">
          <h1>Mr. Raj Kalkute</h1>
          <h4 className="cofounder">Co-Founder</h4>
          <p className="third-desc">
            Raj Kalkute, co-founder of Charzit, is a highly
            skilled battery Manufactring expert with over 7 years of
            experience. He brings a wealth of knowledge and expertise to
            the team, with a focus on Bussiness management. Prior to
            co-founding Charzit, Raj served in key
            roles at several leading related organizations, where
            he gained valuable experience in Manufactring.
            He also has experience as an entrepreneur, having founded and
            successfully grown GRENEWABLE LTD. As co-founder of
            Charzit, Raj has played an instrumental
            role in developing the platform and building the team.He is
            committed to delivering exceptional customer service and ensuring
            that Charzit provides the best possible experience for users.
          </p>
        </div>
        <div className="img-area">
          <img className="founder-img" alt="" src="../mask-group4@2x.png" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
