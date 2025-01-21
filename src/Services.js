import React from 'react';
import './Services.css';
import sofaImage from './assert/grand.jpg';

function Services() {
  return (
    <section id="services" style={{ 
      backgroundImage: `url(${sofaImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      padding: '20px' 
    }}>
      <h2 style={{ color: 'white' }}>OUR SERVICES AND SOLUTIONS</h2>
      <div className="services-container">
        <div className="service-card" style={{ backgroundColor: 'blue' }}>
          <h3>DESIGN PRINCIPLES</h3>
          <p>Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions</p>
        </div>
        <div className="service-card" style={{ backgroundColor: 'lightgreen' }}>
          <h3>UNIQUE VALUES</h3>
          <p>Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions</p>
        </div>
        <div className="service-card" style={{ backgroundColor: 'red' }}>
          <h3>STYLE COMPONENTS</h3>
          <p>Need A Project Completed By An Expert? Let’s Go! Access A Human Resources Consultant To Answer Questions</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
