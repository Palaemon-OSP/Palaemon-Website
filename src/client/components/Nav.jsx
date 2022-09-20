import React from 'react';
import { useNavigate } from 'react-router';

const Nav = () => {
  return (
    <div className="nav">
      <img className="icon" src="" />
      <div className="nav-right-container">
        <ul className="nav-links">
          <li>About</li>
          <li>Docs</li>
          <li>Github</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
