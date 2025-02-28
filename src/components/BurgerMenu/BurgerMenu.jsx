// src/components/BurgerMenu/BurgerMenu.jsx
import React, { useState, useEffect } from 'react';
import linkedinIcon from '../../assets/icons/LinkedIn.svg';
import telegramIcon from '../../assets/icons/Telegram.svg';
import youtubeIcon from '../../assets/icons/Youtube.svg';
import githubIcon from '../../assets/icons/Github.svg';


const BurgerMenu = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.burger-menu-container')) {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close menu when clicking on a navigation link
  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="burger-menu-container">
      <div 
        className={`burger-icon ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>

        
        <div className="menu-content">
          <div className="name-section">
            <h2>Maksym</h2>
            <h1>Chukhrai</h1>
          </div>

          <nav className="burger-nav">
            <a href="#about" className="nav-link" onClick={handleLinkClick}>About me</a>
            <a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a>
            <a href="#portfolio" className="nav-link" onClick={handleLinkClick}>Portfolio</a>
          </nav>

          <div className="burger-menu-footer">
            <button className="contact-button" onClick={handleLinkClick}>
              Contact me
            </button>
            
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/maksym-chukhrai/" className="social-icon">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://t.me/Akdeniz_2020" className="social-icon">
                <img src={telegramIcon} alt="Telegram" />
              </a>
              <a href="https://github.com/MaksymChukhrai" className="social-icon">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
              <a href="https://github.com/MaksymChukhrai" className="social-icon">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;