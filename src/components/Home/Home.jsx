import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Twitter from "../../img/twitter.png";
import BannerImage from "../../img/bg2.png";
import UICard from "../../img/uicard.jpg";
import WebCard from "../../img/webcard.jpg";
const Home = () => {
  return (
    <Container className="mt-5">
      <div className="row">
        <div className="col-md-5">
          <div className="h-wrapper">
            <div className="h-left">
              <div className="h-name">
                <h1 className="mb-4 name">
                  Hello! I Am <br />
                  <span className="s-hName">Oppong Ansah Joseph</span>
                </h1>
                <p className="mb-4">
                  A seasoned UI/UX and front-end developer known for
                  consistently delivering top-tier web design work characterized
                  by excellence and quality.
                </p>
              </div>
              <button type="button">Hire Me</button>

              <div className="icons">
                <img src={Github} alt="Github" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Twitter} alt="Twitter" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="h-wrapper">
            <div className="h-right">
              <div className="h-banner">
                <img src={BannerImage} alt="bannerImage" />
              </div>
              <div className="h-card">
                <img className="card1" src={UICard} alt="Card1" />
                <img className="card2" src={WebCard} alt="Card2" />
              </div>
              <div className="blurImgBg" style={{background: "rgb(238 210 255)"}}></div>
              <div className="blurImgBg" style={{background: "#C1F5FF", 
              top: "10rem", width: "21rem", height: "11rem" , left: "60rem"}}></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
