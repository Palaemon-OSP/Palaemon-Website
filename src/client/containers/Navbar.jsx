const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-container">
        <a href="/">
          <img className="log" id="logo" src="public/logo-hat.png" />
        </a>
        <div className="nav-right-container">
          <ul className="nav-links">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/docs">Docs</a>
            </li>
            <li>
              <a href="https://github.com/oslabs-beta/Palaemon" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="/medium" target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
