import React from 'react';
import './Portfolio.css'; 

function Portfolio() {
  return (
    <section id="portfolio" style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>LASTET WORKING PROJECT</h2>
      <p style={{ textAlign: 'center' }}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit.</p>
      <div className="portfolio-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div className="portfolio-card" style={{ width: '30%', margin: '10px', backgroundColor: '#4caf50', padding: '10px' }}>
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div className="portfolio-card" style={{ width: '30%', margin: '10px', backgroundColor: '#4caf50', padding: '10px' }}>
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
        <div className="portfolio-card" style={{ width: '30%', margin: '10px', backgroundColor: '#4caf50', padding: '10px' }}>
          <h3>Project 3</h3>
          <p>Description of project 3.</p>
        </div>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '40px' }}>MY EXPERIENCE AND SKILL</h2>
      <div className="experience-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div className="experience-card" style={{ width: '40%', margin: '10px', backgroundColor: 'rgb(215, 196, 54);', padding: '10px' }}>
          <h3>GOOGLE CORPORATION.</h3>
          <p>2011 - 2014 (UI DESIGNER)</p>
          <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
        </div>
        <div className="experience-card" style={{ width: '40%', margin: '10px', backgroundColor: 'rgb(215, 196, 54);', padding: '10px' }}>
          <h3>APPLE PRODUCT CO.</h3>
          <p>2011 - 2014 (UI DESIGNER)</p>
          <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
        </div>
        <div className="experience-card" style={{ width: '40%', margin: '10px', backgroundColor: 'rgb(215, 196, 54);', padding: '10px' }}>
          <h3>LEAD DESIGNER MUSICSOFT</h3>
          <p>2011 - 2014 (UI DESIGNER)</p>
          <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
        </div>
        <div className="experience-card" style={{ width: '40%', margin: '10px', backgroundColor: 'rgb(215, 196, 54);', padding: '10px' }}>
          <h3>BRUNO MARS AS.</h3>
          <p>2011 - 2014 (UI DESIGNER)</p>
          <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
        </div>
      </div>
      <div className="skills-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
        <div className="skill" style={{ textAlign: 'center' }}>
          <h4>Branding Design</h4>
          <div className="progress-bar" style={{ width: '60%', backgroundColor: 'green', height: '10px' }}></div>
        </div>
        <div className="skill" style={{ textAlign: 'center' }}>
          <h4>UI & UX Design</h4>
          <div className="progress-bar" style={{ width: '70%', backgroundColor: 'green', height: '10px' }}></div>
        </div>
        <div className="skill" style={{ textAlign: 'center' }}>
          <h4>Web Design</h4>
          <div className="progress-bar" style={{ width: '30%', backgroundColor: 'green', height: '10px' }}></div>
        </div>
        <div className="skill" style={{ textAlign: 'center' }}>
          <h4>Illustration</h4>
          <div className="progress-bar" style={{ width: '90%', backgroundColor: 'green', height: '10px' }}></div>
        </div>
      </div>
      <h4 style={{ textAlign: 'center', marginTop: '40px' }}>TESTIMONIALS</h4>
      <h1>"Happy Clients To Says"</h1>
      <div className="testimonial-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <p style={{ fontStyle: 'italic' }}><h3>
          "Gilroy is a great and super-professional service provider, which brought new technologies, new methodology, and a fresh perspective to our project."
          </h3>
        </p>
        <p>- Jack Metiyo Shina, NYC, USA</p>
      </div>
      <button className="cta-button" style={{ backgroundColor: 'green', display: 'block', margin: '20px auto' }}>VIEW ALL PROJECTS</button>
      <h2 style={{ textAlign: 'center', marginTop: '40px' }}>NEWSLETTER</h2>
      <div className="newsletter-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <p>Stay up to date, subscribe to the free newsletter!</p>
        <input type="email" placeholder="Enter Your Email.." style={{ padding: '10px', width: '300px' }} />
        <button style={{backgroundColor: 'green', color: 'white', padding: '10px', marginLeft: '10px' }}>SUBSCRIBE</button>
      </div>
      

    </section>
  );
}

export default Portfolio;
