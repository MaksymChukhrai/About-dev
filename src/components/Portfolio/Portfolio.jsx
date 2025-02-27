import React, { useState } from 'react';
import Slider from 'react-slick';
import './Portfolio.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A responsive web application built with React and Node.js that allows users to manage their tasks efficiently. Features include user authentication, task categorization, and real-time updates.",
      fullDescription: "A responsive web application built with React and Node.js that allows users to manage their tasks efficiently. Features include user authentication, task categorization, and real-time updates. The frontend uses React with Redux for state management and styled components for UI. The backend is built with Node.js, Express, and MongoDB, providing a RESTful API for the frontend. The application also includes features like drag-and-drop task management, priority settings, deadline notifications, and task sharing capabilities. The project follows clean architecture principles and includes comprehensive test coverage.",
      imageLarge: "project1-large.jpg",
      imageSmall: "project1-small.jpg",
      liveUrl: "https://project1.example.com",
      githubUrl: "https://github.com/username/project1"
    },
    {
      id: 2,
      title: "Project 2",
      description: "An e-commerce platform built with MERN stack, featuring product browsing, cart management, secure checkout, and admin panel for inventory management.",
      fullDescription: "An e-commerce platform built with MERN stack, featuring product browsing, cart management, secure checkout, and admin panel for inventory management. The application includes user authentication with JWT, product filtering and search, wishlists, order tracking, payment integration with Stripe, and a comprehensive admin dashboard for managing products, orders, and users. The frontend is built with React and uses context API for state management. The backend uses Express.js with MongoDB for database operations. The platform is fully responsive and optimized for performance across different devices.",
      imageLarge: "project2-large.jpg",
      imageSmall: "project2-small.jpg",
      liveUrl: "https://project2.example.com",
      githubUrl: "https://github.com/username/project2"
    },
    {
      id: 3,
      title: "Project 3",
      description: "A real-time chat application with private messaging, group chats, and file sharing capabilities using Socket.io, React, and Node.js.",
      fullDescription: "A real-time chat application with private messaging, group chats, and file sharing capabilities using Socket.io, React, and Node.js. The application features real-time messaging with typing indicators, read receipts, user presence status, file uploads, emoji picker, message search, and chat history. The frontend is built with React and uses custom hooks for socket management. The backend uses Express with Socket.io for real-time communication and MongoDB for storing messages and user data. The application is responsive and works across desktop and mobile devices.",
      imageLarge: "project3-large.jpg",
      imageSmall: "project3-small.jpg",
      liveUrl: "https://project3.example.com",
      githubUrl: "https://github.com/username/project3"
    },
    // Add more projects as needed
  ];

  // State to track which project descriptions are expanded
  const [expandedProjects, setExpandedProjects] = useState({});

  // Toggle the expanded state for a project
  const toggleProjectDescription = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="portfolio-slider">
          <Slider {...settings}>
            {projects.map(project => (
              <div className="project-card" key={project.id}>
                <div 
                  className={`project-image ${expandedProjects[project.id] ? 'small' : 'large'}`}
                >
                  <img 
                    src={expandedProjects[project.id] ? 
                      require(`../../assets/images/${project.imageSmall}`) : 
                      require(`../../assets/images/${project.imageLarge}`)} 
                    alt={project.title} 
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <div 
                    className={`project-description ${expandedProjects[project.id] ? 'expanded' : ''}`}
                  >
                    <p>
                      {expandedProjects[project.id] ? project.fullDescription : project.description}
                    </p>
                    <span 
                      className="toggle-description" 
                      onClick={() => toggleProjectDescription(project.id)}
                    >
                      {expandedProjects[project.id] ? 'See less' : 'See more'}
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
                      className="project-btn code" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
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