import React from 'react';
import './Footer.scss';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-info">
          <p>
            Feel free to reach out if you have any questions about my services or would like to discuss a project.
            I am always open to new opportunities and collaborations.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div className="contact-item">
              <FaPhone />
              <a href="tel:+1234567890">+123 456 7890</a>
            </div>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
          <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Maksym Chukhrai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;