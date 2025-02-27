import React from 'react';
import './Skills.scss';
import jsLogo from '../../assets/icons/javascript.svg';
// import reactLogo from '../../assets/icons/react.svg';
import nodejsLogo from '../../assets/icons/nodejs.svg';
// import mongodbLogo from '../../assets/icons/mongodb.svg';
// import postmanLogo from '../../assets/icons/postman.svg';
// import htmlLogo from '../../assets/icons/html.svg';
// import expressLogo from '../../assets/icons/express.svg';
// import reduxLogo from '../../assets/icons/redux.jsx';
// import nextjsLogo from '../../assets/icons/nextjs.svg';
// import sassLogo from '../../assets/icons/sass.svg';
// import pugLogo from '../../assets/icons/pug.svg';

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript", icon: jsLogo },
    // { name: "React", icon: reactLogo },
    // { name: "HTML/CSS", icon: htmlLogo },
    // { name: "Redux", icon: reduxLogo },
    // { name: "Next.js", icon: nextjsLogo },
    // { name: "Sass", icon: sassLogo },
    // { name: "Pug", icon: pugLogo },
  
  ];

  const backendSkills = [
    { name: "Node.js", icon: nodejsLogo },
    // { name: "Express", icon: expressLogo },
    // { name: "MongoDB", icon: mongodbLogo },
    // { name: "Postman", icon: postmanLogo }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills and Expertise</h2>
        
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <img src={skill.icon} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <img src={skill.icon} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;