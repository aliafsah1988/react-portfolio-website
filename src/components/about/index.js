import React from "react";
import text from "../../constants/text";
import "./style.css";

const About = () => {
  let aboutMeText = text.about_me.split('\n').map(i => {
    return <p>{i}</p>
  });
  return (
    <section className="about section-padding" data-scroll-index="1" id='about'>
      <div className="container">
        <div className="section-head wow zoomIn" data-wow-offset="200">
          <h3>About Me</h3>
          <h6>A Full-Stack Software Engineer</h6>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="intro mb-md-50 wow fadeInLeft">
              {aboutMeText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
