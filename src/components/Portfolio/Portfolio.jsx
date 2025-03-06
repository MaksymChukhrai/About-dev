import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Импорт изображений
import miminoLarge from "../../assets/images/projects/mimino/mimino-mob-large.webp";
import miminoSmall from "../../assets/images/projects/mimino/mimino-mob-small.webp";

import heathyhubLarge from "../../assets/images/projects/healthy_hub/hh-mob-large.webp";
import heathyhubSmall from "../../assets/images/projects/healthy_hub/hh-mob-small.webp";

import furnitureLarge from "../../assets/images/projects/furniture/furniture-mob-large.webp";
import furnitureSmall from "../../assets/images/projects/furniture/furniture-mob-small.webp";

import cinemaniaLarge from "../../assets/images/projects/cinemania/cinemania-mob-large.webp";
import cinemaniaSmall from "../../assets/images/projects/cinemania/cinemania-mob-small.webp";

import advocateLarge from "../../assets/images/projects/advocate/advocate-mob-large.webp";
import advocateSmall from "../../assets/images/projects/advocate/advocate-mob-small.webp";

import casinoLarge from "../../assets/images/projects/casino/casino-mob-large.webp";
import casinoSmall from "../../assets/images/projects/casino/casino-mob-small.webp";

import radioLarge from "../../assets/images/projects/MyRadio/radio-lg.webp";
import radioSmall from "../../assets/images/projects/MyRadio/radio-sm.webp";

import autoserviceSmall from "../../assets/images/projects/autoservice/autoserv-sm.webp";
import autoserviceLarge from "../../assets/images/projects/autoservice/autoserv-lg.webp";


import coffeeLarge from "../../assets/images/projects/coffee/coffee-lg.webp";
import coffeeSmall from "../../assets/images/projects/coffee/coffee-sm.webp";

import calendarLarge from "../../assets/images/projects/calendar/calendar-lg.webp";
import calendarSmall from "../../assets/images/projects/calendar/calendar-sm.webp";

import dashboardLarge from "../../assets/images/projects/dashboard/dashboard-lg.webp";
import dashboardSmall from "../../assets/images/projects/dashboard/dashboard-sm.webp";

import imageSearchLarge from "../../assets/images/projects/image-search/image-search-lg.webp";
import imageSearchSmall from "../../assets/images/projects/image-search/image-search-sm.webp";

const Portfolio = () => {
  // Данные проектов согласно макету
  const projects = [
    {
      id: 1,
      title: "Healthy hub",
      description:
        "HealthyHub. A nutrition and weight-tracking app with personalized features via user accounts.",
      fullDescription: {
        overview:
          "HealthyHub is designed to help users monitor their dietary habits and weight changes. It features personalized dashboards, registration, and account-specific data tracking.",
        role: "Frontend Developer in a team. I implemented the graph section, developed API data handling logic, and ensured responsive design.",
        techStack: "JavaScript, React, Redux, Node.js, Express, MongoDB.",
      },
      imageLarge: heathyhubLarge,
      imageSmall: heathyhubSmall,
      liveUrl: "https://maksymchukhrai.github.io/team-project-SlimTrack360/",
      githubUrl: "https://github.com/MaksymChukhrai/team-project-SlimTrack360",
    },
    {
      id: 2,
      title: "Mimino Hotel",
      description:
        "Mimino Hotel - A website for a hotel and restaurant featuring room booking and menu services.",
      fullDescription: {
        overview:
          "Mimino Hotel is a user-friendly platform for managing hotel reservations and restaurant services.",
        role: "Frontend Developer. I contributed to the website's design, functionality, and responsive implementation.",
        techStack: "Tech Stack: HTML5, CSS, JavaScript.",
      },
      imageLarge: miminoLarge,
      imageSmall: miminoSmall,
      liveUrl: "https://maksymchukhrai.github.io/Mimino-project/",
      githubUrl: "https://github.com/MaksymChukhrai/Mimino-project",
    },
    {
      id: 3,
      title: "Furniture re-stretching project",
      description:
        "This app showcases services, projects, and allows customers to contact the business.",
      fullDescription: {
        overview:
          "This app promotes the company's services, receives conversions from social media, allows you to contact the company and/or accept order details.",
        role: "Full Stack Developer. I conceptualized the app, created the design, wrote SEO-friendly markup, implemented JavaScript and PHP, and deployed the site.",
        techStack: "JavaScript, PHP, HTML/CSS",
      },
      imageLarge: furnitureLarge,
      imageSmall: furnitureSmall,
      liveUrl: "https://7studio.com.ua/",
      githubUrl:
        "https://github.com/MaksymChukhrai/Furniture-re-stretching-project",
    },
    {
      id: 4,
      title: "Cinemania",
      description:
        "Cinemania offers basic description, filtering and information features.",
      fullDescription: {
        overview:
          "Cinemania offers movie descriptions, trailers, and a personalized catalog system.",
        role: "My Role: Frontend Developer in a team. I worked on API data integration, data logic, and adaptive design.",
        techStack: "Vanilla JavaScript, HTML/CSS, REST API, Parcel",
      },
      imageLarge: cinemaniaLarge,
      imageSmall: cinemaniaSmall,
      liveUrl: "https://maksymchukhrai.github.io/team-project-cinemania/",
      githubUrl: "https://github.com/MaksymChukhrai/team-project-cinemania",
    },
    {
      id: 5,
      title: "Advocate web application",
      description:
        "AdvocApp - A professional web application for an attorney's services.",
      fullDescription: {
        overview:
          "This app highlights the attorney's expertise and allows clients to contact and learn about services.",
        role: "Full Stack Developer. I wrote SEO-friendly markup, implemented JavaScript and PHP, and deployed the project.",
        techStack: "JavaScript, PHP.",
      },
      imageLarge: advocateLarge,
      imageSmall: advocateSmall,
      liveUrl: "https://igor-tarasenko.com/",
      githubUrl: "https://github.com/MaksymChukhrai/advocatapp",
    },
    {
      id: 6,
      title: "Casino Extra",
      description:
        "Casino Extra - A promotional web app for online casino services in Curaçao.",
      fullDescription: {
        overview:
          "This app focuses on enhancing page load speed and SEO for better promotional reach.",
        role: "Frontend Developer. I optimized UI, improved page load speed sixfold, and implemented SEO configurations.",
        techStack: "HTML/CSS, JavaScript.",
      },
      imageLarge: casinoLarge,
      imageSmall: casinoSmall,
      liveUrl: "https://maksymchukhrai.github.io/CasinoExtra/",
      githubUrl: "https://github.com/MaksymChukhrai/CasinoExtra",
    },
    {
      id: 7,
      title: "Simple radio tuner",
      description:
        "A radio tuner. Open on your phone, connect via Bluetooth.",
      fullDescription: {
        overview:
          "This web app works on any device that has a browser. No registrations, downloads or ads. Just plug in your headphones.",
        role: "Frontend Developer. Released everything myself. Idea, design, programming and layout.",
        techStack: "Vanilla JavaScript.",
      },
      imageLarge: radioLarge,
      imageSmall: radioSmall,
      liveUrl: "https://maksymchukhrai.github.io/MyRadio/",
      githubUrl: "https://github.com/MaksymChukhrai/MyRadio",
    },
    {
      id: 8,
      title: "Autoservice in Austria",
      description:
        "Professional car maintenance and repair services in Gleisdorf, Austria.",
      fullDescription: {
        overview:
          "Turbo Autoservice offers expert diagnostics, detailing, and repair services, ensuring your vehicle's optimal performance and appearance.",
        role: "Frontend Developer. Redesigning layout, refactoring, translating and localizing content, setting up utm for marketing, deploy to hosting.",
        techStack: "JavaScript, HTML/CSS.",
      },
      imageLarge: autoserviceLarge,
      imageSmall: autoserviceSmall,
      liveUrl: "https://maksymchukhrai.github.io/Autoservice-Austria",
      githubUrl: "https://github.com/MaksymChukhrai/Autoservice-Austria",
    },
    {
      id: 9,
      title: "Simply Coffee",
      description:
        "Simply Coffee. Enjoy exceptional blends for every mood and moment, bringing rich flavors to your day.",
      fullDescription: {
        overview:
          "Online shop offers fresh-roasted beans, diverse blends, and swift delivery, ensuring a delightful coffee experience.",
        role: "Frontend Developer. Released everything myself: idea, design, programming, and layout",
        techStack: "JavaScript, Vite, HTML/CSS.",
      },
      imageLarge: coffeeLarge,
      imageSmall: coffeeSmall,
      liveUrl: "https://maksymchukhrai.github.io/coffee-project",
      githubUrl: "https://github.com/MaksymChukhrai/coffee-project",
    },
    {
      id: 10,
      title: "My calendar app",
      description: "Interactive calendar for efficient event management and scheduling.",
      fullDescription: {
        overview:
          "A user-friendly calendar application enabling seamless event creation, editing, and organization.",
        role:  "Frontend Developer. Idea, design, programming, and layout.",
        techStack: "React, TypeScript, Vite, Vitest.",
      },
      imageLarge: calendarLarge,
      imageSmall: calendarSmall,
      liveUrl: "https://maksymchukhrai.github.io/my-calendar-app/",
      githubUrl: "https://github.com/MaksymChukhrai/my-calendar-app",
    },
    {
      id: 11,
      title: "Financial Dashboard Widget",
      description: "Displays real-time stock prices for Microsoft, IBM, and Nvidia.",
      fullDescription: {
        overview:
          "Interactive graphs show stock prices and percentage changes for selected companies. The open API of the New York Stock Exchange is used.",
        role:  "Frontend Developer. Design, programming and layout.",
        techStack: "React, Axios, React-testing library.",
      },
      imageLarge: dashboardLarge,
      imageSmall: dashboardSmall,
      liveUrl: "https://maksymchukhrai.github.io/Dashboard-Widget/",
      githubUrl: "https://github.com/MaksymChukhrai/Dashboard-Widget",
    },
    {
      id: 12,
      title: "Image Search Engine",
      description: "Search and find images on any topic using the Pixabay API.",
      fullDescription: {
        overview:
          "A search engine to find images from Pixabay based on user input. It retrieves and displays results in a clean interface.",
        role:  "Frontend Developer. Idea, design, programming and layout.",
        techStack: "JavaScript, Pixabay API, Axios, Simplelightbox.",
      },
      imageLarge: imageSearchLarge,
      imageSmall: imageSearchSmall,
      liveUrl: "https://maksymchukhrai.github.io/magic-picture-finder/",
      githubUrl: "https://github.com/MaksymChukhrai/magic-picture-finder",
    },


  ];

  // State для отслеживания развернутых описаний проектов
  const [expandedProjects, setExpandedProjects] = useState({});

  // Переключение состояния развернутого описания
  const toggleProjectDescription = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  // Настройки слайдера
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.8,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768, // Планшеты
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 450, // Мобильные устройства
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">My Portfolio</h2>

        <div className="portfolio-slider">
          <Slider {...settings}>
            {projects.map((project) => (
              <div className="slide-container" key={project.id}>
                <div className="project-card">
                  <div
                    className={`project-image ${
                      expandedProjects[project.id] ? "small" : "large"
                    }`}
                  >
                    <img
                      src={
                        expandedProjects[project.id]
                          ? project.imageSmall
                          : project.imageLarge
                      }
                      alt={project.title}
                    />
                  </div>
                  <div className="project-info">
                    {/* <h3 className="project-title">{project.title}</h3> */}
                    <div
                      className={`project-description ${
                        expandedProjects[project.id] ? "expanded" : ""
                      }`}
                    >
                      {expandedProjects[project.id] ? (
                        // Показываем полное описание в развёрнутом состоянии
                        <p className="description-text">
                          {project.fullDescription.overview}
                        </p>
                      ) : (
                        // Показываем краткое описание в свёрнутом состоянии
                        <p className="description-text">
                          {project.description}
                        </p>
                      )}

                      {expandedProjects[project.id] && (
                        <>
                          <div className="role-block">
                            <p className="role-text">
                              <strong>My Role:&nbsp;</strong>
                              {project.fullDescription.role}
                            </p>
                          </div>
                          <div className="tech-block">
                            <p className="tech-text">
                              <strong>Tech Stack:&nbsp;</strong>
                              {project.fullDescription.techStack}
                            </p>
                          </div>
                        </>
                      )}
                      <span
                        className="toggle-description"
                        onClick={() => toggleProjectDescription(project.id)}
                      >
                        {expandedProjects[project.id] ? "See less" : "See more"}
                      </span>
                    </div>

                    <div className="project-links">
                      <a
                        href={project.liveUrl}
                        className="project-btn live"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Page
                      </a>
                      <a
                        href={project.githubUrl}
                        className="project-btn repo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
