import React from 'react';
import './Testimonial.scss';
import testimonialImage from '../../assets/images/client-photo.jpg';

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-container">
        <h2 className="section-title">Testimonial</h2>
        
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote"></div>
            <p>
            Your commitment to delivering a polished and functional website has exceeded our expectations. Moreover, your responsiveness and willingness to accommodate any changes or updates have been commendable. You've been a pleasure to work with, and your proactive communication ensured that the project progressed smoothly and efficiently.
            </p>
            <div className="client-info">
              <h4>Igor Tarasenko</h4>
              <p>CEO, Law Company Tarasenko and Partners</p>
            </div>
          </div>
          <div className="client-image">
            <img src={testimonialImage} alt="Client" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;