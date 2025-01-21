import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 
import { FaHome, FaInfoCircle, FaTools, FaBriefcase } from 'react-icons/fa'; 

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/services"><FaTools /> Services</Link></li>
        <li><Link to="/portfolio"><FaBriefcase /> Portfolio</Link></li>
        <li><Link to="/Pages"><FaBriefcase /> Pages</Link></li>
        <li>
          <input type="text" placeholder="Search..." className="SearchBar" />
          <button className="SearchButton">🔍</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
