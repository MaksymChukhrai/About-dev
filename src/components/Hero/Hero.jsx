import React from 'react';
import './Hero.scss';
import backgroundVideo from '../../assets/videos/Lines_1920x1080_30Fps.webm';
import profilePhoto from '../../assets/images/me.png';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/webm" />
        </video>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-image">
            <img src={profilePhoto} alt="Maksym Chukhrai" />
          </div>
          <div className="hero-text">
            <h1>I'm <span>Maksym Chukhrai</span></h1>
            <h2>Full Stack Developer</h2>
            <button type="button" className="contact-btn" >
            <a 
              href="https://wa.me/yourphonenumber" 
              
              target="_blank" 
              rel="noopener noreferrer"
            >
              Contact Me
            </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;