import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>graceunstoppable7@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.linkedin.com/in/grace777/">
        <Linkdin color="white" size={"3rem"} /></a>
        <a href="https://github.com/Anku7">
          <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
