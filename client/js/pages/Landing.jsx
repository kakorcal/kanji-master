import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="page page__landing">
    <div className="hero__container illustration__overlay">
      <div className="hero__heading">
        <h1 className="hero__title">
          <Link to="/">Kanji Master</Link>
        </h1>
        <p className="hero__subtitle">The Ultimate Path To Kanji Mastery</p>
        <div className="hero__button">
          <Link to="/test">Get Started For Free</Link>
        </div>
      </div>
      <div className="hero__douty illustration__douty--full" />
    </div>
  </div>
);

export default Landing;
