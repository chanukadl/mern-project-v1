import React from "react";
import AboutBackgroudImage from "../Assets/about-background-image.png";
import PlayCircleFilled from "@mui/icons-material/PlayCircleFilled";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroudImage} alt="" />
      </div>
      <div className="about-section-text-container" style={{paddingTop:'4em'}}>
        <p className="primary-subheading">About</p>
        <h2 className="primary-heading">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        </h2>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Read More</button>
          <button className="watch-video-button">
            <PlayCircleFilled /> Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default About