import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a full-stack developer with years of experience building and
              maintaining web applications. I specialize in both frontend and
              backend development, creating responsive and scalable solutions.
            </p>
          </div>
          <div className="mission">
            <h3>My Mission</h3>
            <p>
              My goal is to create efficient, user-friendly applications that solve
              real-world problems. I'm passionate about clean code, performance
              optimization, and creating intuitive interfaces that enhance user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;