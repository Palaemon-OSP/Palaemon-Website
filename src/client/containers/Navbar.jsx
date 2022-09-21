const Navbar = () => {
  return (
    <div className="nav" id="navbar">
      <img className="icon" id="logo" src="logo-hat.png" />
      <div className="nav-right-container">
        <ul className="nav-links">
          <li><a href='/'>About</a></li>
          <li><a href='/docs'>Docs</a></li>
          <li><a href="https://github.com/oslabs-beta/Palaemon">Github</a></li>
          <li><a href="/medium">Blog</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
