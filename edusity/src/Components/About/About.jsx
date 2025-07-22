import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about" id="about" >
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>About university</h3>
        <h2>nurturing tomoorrow's leader today</h2>
        <p>
          Edusity University is a modern online learning platform designed to
          make education accessible, interactive, and globally connected. It
          offers a comprehensive suite of tools for both instructors and
          learners, including real-time language translation, breakout rooms,
          whiteboards, and multimedia integration. The platform supports live
          and self-paced courses, allowing educators to teach freely and
          students to learn flexibly across time zones and devices.
        </p>
        <p>
          What sets Edusity apart is its commitment to empowering educators and
          institutions. Through its customizable Learning Management System
          (LMS), universities and businesses can host training programs,
          webinars, and compliance courses tailored to their needs. The platform
          also supports white-label solutions, enabling organizations to
          maintain their branding while leveraging Edusity’s robust
          infrastructure. Its strategic partnerships with academic consultancies
          like The Babb Group further enhance its curriculum development and
          instructional design capabilities.
        </p>
        <p>
          Beyond technology, Edusity champions inclusivity and global impact.
          With clients and collaborators spanning Canada, UAE, Nigeria, and
          Mexico, it fosters a diverse learning community. Its founders, Arvind
          Betala and Vishal Shah, bring decades of experience in education and
          tech development, driving the platform’s mission to break down
          barriers to learning. Whether you're a student, teacher, or
          institution, Edusity University offers a dynamic space to grow, teach,
          and connect.
        </p>
      </div>
    </div>
  );
};

export default About;
