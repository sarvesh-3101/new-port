import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/single-blog" element={<SingleBlog />} /> 
          <Route path="/contact-us" element={<ContactUs />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App; 