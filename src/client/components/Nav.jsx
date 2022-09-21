import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <img className="icon" src="logo.png" />
      <div className="nav-right-container">
        <ul className="nav-links">
          <li><a href='/'>About</a></li>
          <li><a href='/docs'>Docs</a></li>
          <li><a href="https://github.com/oslabs-beta/Palaemon">Github</a></li>
          <li><a href="https://github.com/oslabs-beta/Palaemon/blob/dev/README.mdn">Blog</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
