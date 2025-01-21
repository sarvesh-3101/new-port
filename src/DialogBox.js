import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './DialogBox.css'; 

function DialogBox() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDialog} className="pages-button">PAGES</button>
      {isOpen && (
        <div className="dialog-backdrop" onClick={toggleDialog}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/portfolio-details">Portfolio Details</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/single-blog">Single Blog</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
            <button onClick={toggleDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DialogBox;
