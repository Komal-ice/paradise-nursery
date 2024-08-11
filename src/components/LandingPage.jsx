// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-page">
    <header>
      <h1>Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful house plants</p>
      <Link to="/products">
        <button className="get-started-button">Get Started</button>
      </Link>
    </header>
  </div>
);

export default LandingPage;
