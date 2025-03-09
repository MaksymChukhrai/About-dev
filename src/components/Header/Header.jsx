import React, { useState, useEffect } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

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
   // Define navigation links to pass to BurgerMenu
   const navLinks = [
    { href: "#about", text: "About Me" },
    { href: "#skills", text: "Skills" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#testimonial", text: "Testimonial" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header_container">
      <div className="header_name">
  <a href="https://mchukhrai.com" title="Перейти на главную страницу">
    <div className="name-container">
      <span className="first-name">Maksym</span>
      <span className="last-name">Chukhrai</span>
    </div>
  </a>
  <span 
    className="tooltip-icon" 
    onMouseEnter={(e) => {
      const tooltip = document.getElementById('name-tooltip');
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = '1';
    }}
    onMouseLeave={(e) => {
      const tooltip = document.getElementById('name-tooltip');
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = '0';
    }}
  >
    i
  </span>
  <div id="name-tooltip" className="tooltip">
  Pronounced in English as: Maksym Chukhrai [mak-SEEM choo-HRAI]
  </div>
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
        {/* <a 
          href="https://t.me/your_telegram_username" 
          className="telegram-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Telegram
        </a> */}
        <BurgerMenu navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;