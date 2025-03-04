import React from 'react';


const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            I am a full stack developer. My passion for creating unique and effective digital solutions inspires me every day. I believe that technology has the power to make our world better, and I strive to contribute to this process.
            </p>
          </div>
          <div className="mission">
            <h3>My Mission</h3>
            <p className="about-text">
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