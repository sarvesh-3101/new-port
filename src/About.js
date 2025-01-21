import React from 'react';
import humanImage from './assert/living.jpg';
import sofaImage from './assert/sofa.jpg';

function About() {
  return (
    <section id="about" style={{ 
      backgroundImage: `url(${sofaImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      width: '100%', 
      height: '800px', 
      display: 'flex', 
      flexDirection: 'row-reverse', 
      alignItems: 'center' 
    }}>
      <div style={{ textAlign: 'right', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div>
          <center><h2>ABOUT US</h2></center>
          <center><h3>FAILURE IS THE CONDIMENT THAT GIVES SUCCESS</h3></center>
          <center><p>Spend more time focusing on the important aspects of your business. Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced virtual HR company, we are offering online HR systems that can be customized depending on your business needs.</p></center>
          <div style={{ textAlign: 'center' }}>
            <button className="cta-button" style={{ backgroundColor: 'green', color: 'white' }}>DOWNLOAD CV</button>
          </div>
        </div>
      </div>
      <img src={humanImage} alt="Child with Robot" className="home-image" style={{ width: '200px', height: 'auto', flex: 1 }} />
    </section>
  );
}

export default About;
