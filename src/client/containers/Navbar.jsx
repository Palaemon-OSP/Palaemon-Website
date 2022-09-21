const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <a href="/"><img className="icon" id="logo" src="logo-hat.png" /></a>
      <div className="nav-right-container">
        <ul className="nav-links">
          <li><a href='/'>About</a></li>
          <li><a href='/docs'>Docs</a></li>
          <li><a href="https://github.com/oslabs-beta/Palaemon">Github</a></li>
          <li><a href="/medium">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
