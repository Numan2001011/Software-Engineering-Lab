import { useState } from "react";
const Home = () => {
    const [togglebar, setTogglebar] = useState(false);
    const ShowHeader = () => {
        setTogglebar(!togglebar);
  };
return (
    <div>
    <header className="header">
        <nav className="h-nav">
          <div className="h-nav-div">
            <h2 className="h-nav-div-h2">LabAssist</h2>
          </div>
          <div
            className={togglebar ? "nav-menu show" : "nav-menu"}
            id="nav-menu"
          >
            <button
              className="nav-menu-close-btn"
              id="nav-menu-close-btn"
              onClick={ShowHeader}
            >
              <i className="fa fa-window-close"></i>
            </button>
            <ul className="nav-menu-list">
              <li className="nav-menu-item">
                <a href="#" className="nav-menu-link">
                  Home
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#features" className="nav-menu-link">
                  Features
                </a>
              </li>
              <li className="nav-menu-item">
                <a href="#contact" className="nav-menu-link">
                  Contact
                </a>
              </li>
              <li className="nav-menu-item">
                <Link
                  to="/Registration"
                  id="home-login-btn"
                  className="nav-menu-link text-decoration-none text-white"
                >
                  Sign up/Login
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="nav-menu-toggle-btn"
            id="toggle-btn"
            onClick={ShowHeader}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </nav>
      </header>
    
    
    </div>
  );
}
