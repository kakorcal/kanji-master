import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="page page__landing">
    <div className="hero__container">
      <div className="hero__overlay illustration__overlay">
        <div className="container">
          <div className="hero__heading">
            <h1 className="hero__title">
              <Link to="/">Kanji Master</Link>
            </h1>
            <p className="hero__subtitle">The Ultimate Path To Kanji Mastery</p>
            <div className="button button--green button--large">
              <Link to="/test">Get Started For Free</Link>
            </div>
          </div>
          <div className="hero__nav">
            <div className="hero__nav__item button button--pink button--medium">
              <Link to="/test">Login</Link>
            </div>
            <div className="hero__nav__item button button--blue button--medium">
              <Link to="/test">Signup</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__douty illustration__douty__full" />
      <div className="hero__kanji__cards">
        <div className="hero__kanji__card">
          <div className="hero__hiragana__card">
            <div className="hero__hiragana__character">ひ</div>
          </div>
          <div className="hero__kanji__character">日</div>
        </div>
        <div className="hero__kanji__card">
          <div className="hero__hiragana__card">
            <div className="hero__hiragana__character">ゆ</div>
          </div>
          <div className="hero__kanji__character">豊</div>
        </div>
        <div className="hero__kanji__card">
          <div className="hero__hiragana__card">
            <div className="hero__hiragana__character">こ</div>
          </div>
          <div className="hero__kanji__character">子</div>
        </div>
        <div className="hero__kanji__card">
          <div className="hero__hiragana__card">
            <div className="hero__hiragana__character">み</div>
          </div>
          <div className="hero__kanji__character">水</div>
        </div>
        <div className="hero__kanji__card">
          <div className="hero__hiragana__card">
            <div className="hero__hiragana__character">と</div>
          </div>
          <div className="hero__kanji__character">鳥</div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque esse, eveniet doloribus totam quis error
          facere in quam perspiciatis fugiat hic maxime molestias deleniti. Ratione expedita vel optio libero
          consequuntur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque esse, eveniet doloribus totam quis error
          facere in quam perspiciatis fugiat hic maxime molestias deleniti. Ratione expedita vel optio libero
          consequuntur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque esse, eveniet doloribus totam quis error
          facere in quam perspiciatis fugiat hic maxime molestias deleniti. Ratione expedita vel optio libero
          consequuntur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque esse, eveniet doloribus totam quis error
          facere in quam perspiciatis fugiat hic maxime molestias deleniti. Ratione expedita vel optio libero
          consequuntur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque esse, eveniet doloribus totam quis error
          facere in quam perspiciatis fugiat hic maxime molestias deleniti. Ratione expedita vel optio libero
          consequuntur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque esse, eveniet doloribus totam quis error
          facere in quam perspiciatis fugiat hic maxime molestias deleniti. Ratione expedita vel optio libero
          consequuntur?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque esse, eveniet doloribus totam quis error
          facere in quam perspiciatis fugiat hic maxime molestias deleniti. Ratione expedita vel optio libero
          consequuntur?
        </p>
      </div>
    </div>
  </div>
);

export default Landing;
