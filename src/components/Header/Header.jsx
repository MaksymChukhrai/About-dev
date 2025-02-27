import React, { useState, useEffect } from 'react';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header_name">
          <span>Maksym</span>
          <span>Chukhrai</span>
         </div>
        <nav className="nav-menu">
          <ul>
            <li onClick={() => scrollToSection('about')}>About Me</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
            <li onClick={() => scrollToSection('testimonial')}>Testimonial</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </nav>
        <a 
          href="https://t.me/your_telegram_username" 
          className="telegram-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
    </header>
  );
};

export default Header;