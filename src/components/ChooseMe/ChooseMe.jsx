import React from 'react';
import './ChooseMe.scss';
import { FaCode, FaClock, FaLightbulb, FaHeadset } from 'react-icons/fa';

const ChooseMe = () => {
  const reasons = [
    {
      icon: <FaCode />,
      title: "PROFESSIONAL & CLEAN PROCESS",
      description: "I follow software development best practices ensuring clean, maintainable code."
    },
    {
      icon: <FaLightbulb />,
      title: "PRACTICAL APPROACH",
      description: "I focus on practical solutions that solve real business problems efficiently."
    },
    {
      icon: <FaClock />,
      title: "RESULTS",
      description: "I deliver measurable results that help achieve your business objectives."
    },
    {
      icon: <FaHeadset />,
      title: "OPEN SUPPORTIVE APPROACH",
      description: "I provide ongoing support and clear communication throughout the project lifecycle."
    }
  ];

  return (
    <section className="choose-me" id="choose">
      <div className="container">
        <h2 className="section-title">Why Choose Me</h2>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseMe;