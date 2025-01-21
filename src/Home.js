import React from 'react';
import humanImage from './assert/hall.jpg'; 

import About from './About';
import Services from './Services'; 
import Portfolio from './Portfolio';

function Home() {
  return (
    
    <div className="App-header" style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ display: 'flex'}}>
        <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1>IMAGINATION IS MORE IMPORTANT THAN KNOWLEDGE</h1>
          <p>Together we the people achieve more than any single person could ever do alone.</p>
          <button className="cta-button" style={{ backgroundColor: 'green', color: 'white' }}>GETTING STARTED</button>
        </div>
        <img src={humanImage} alt="Child with Robot" className="home-image" style={{ width: '600px', height: 'auto', marginTop: '20px' }} />
      </div>
      
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default Home;
