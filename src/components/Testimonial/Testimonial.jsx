import React from 'react';
import './Testimonial.scss';
import testimonialImage from '../../assets/images/client-photo.jpg';

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <h2 className="section-title">Testimonial</h2>
        
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote">"</div>
            <p>
              The collaboration with Maksym was absolutely wonderful! His technical expertise and
              ability to understand our business needs resulted in an application that not only
              met but exceeded our expectations. His communication was clear, timely, and professional
              throughout the project. I would highly recommend Maksym for any web development project.
            </p>
            <div className="client-info">
              <h4>Olga Petrenko</h4>
              <p>CEO, TechSolutions Ltd.</p>
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