import React from "react";
import Button from "./Button";
import "./Hereos.css";

function Heroes() {
  return (
    <div className="hero-container">
      <video src="/src/assets/Forza.mp4" autoPlay loop muted></video>
      <h1>FORZA HORIZON 4</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle"></i>
          <i></i>
        </Button>
      </div>
    </div>
  );
}

export default Heroes;
