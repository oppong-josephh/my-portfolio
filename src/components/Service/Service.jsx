import React from "react";
import { Container } from "react-bootstrap";
import "./Service.css";
import HeartEmoji from "../../img/heartemoji.png";
import GlassEmoji from "../../img/glasses.png";
import HumbleEmoji from "../../img/humble.png"
import Card from "../Card/Card";

const Service = () => {
  return (
    <Container>
    <div className="row">
      <div className="col-md-6">
        <div className="fantastic">
          <h1 className="">
            My Fantastic <br /> <span>Services</span>
          </h1>
          <p>
            I'm responsible for designing and developing websites, <br />using a
            variety of web technologies.
          </p>
          {/* <a href={CV}></a> */}
          <button type="button">Download CV</button>
        </div>
      </div>
  
      <div className="col-md-6">
        <div className="row">
          <div className="cards col-md-6 text-center" style={{top: "0", left: "10rem"}}>
            <Card emoji={HeartEmoji} heading={"UI/UX"} details={"Figma, Photoshop."} />
          </div>
          <div className="col-md-6 text-center cards" style={{top: "10rem", left: "-30rem"}}>
            <Card emoji={GlassEmoji} heading={"Developer"} details={"Html, Css, Javascript, React, Wordpress."} />
          </div>
        </div>
  
        <div className="row">
          <div className="col-md-12 text-center cards" style={{top: "20rem", left: "5rem"}}>
            <Card emoji={HumbleEmoji} heading={"Designer"} details={"Photoshop, Canva."} />
          </div>
        </div>
      </div>
    </div>
  </Container>
  
  );
};

export default Service;
