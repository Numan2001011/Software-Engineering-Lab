import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import teamimg from "../../images/team.svg";
import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [togglebar, setTogglebar] = useState(false);
    const ShowHeader = () => {
        setTogglebar(!togglebar);
  };

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".h-nav-div", {
      opacity: 0,
      y: -10,
      delay: 0.1,
      duration: 0.1,
    });
    // Navigation Menu //
    gsap.from(".nav-menu-list .nav-menu-item", {
      opacity: 0,
      y: -10,
      delay: 0.2,
      duration: 0.2,
      stagger: 0.1,
    });
  }, {});
    
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

    <section className="wrapper">
        <div className="w-div container">
          <div className="w-div-div grid-cols-2">
            {/* Text item to the left */}
            <div className="w-div-div-div grid-item-1">
              <h1 className="main-heading">
                Welcome to <span>LabAssist</span>
                <br />
                <span id="main-heading-p2">Lab Management System</span>
              </h1>
              <p className="wrapper-info-text">
                A beautiful, user-friendly website that makes usage of IoT Lab
                more automated and flexible.
              </p>
              <div className="wrapper-btn">
                {/* <button className="mybtn get-started-btn"></button> */}
                <Link
                  to="/Login"
                  className="mybtn get-started-btn text-decoration-none text-white"
                >
                  Get Started
                </Link>
                <Link
                  to="/documentation"
                  className="mybtn get-started-btn text-decoration-none documentation-btn"
                >
                  documentation
                </Link>
              </div>
            </div>

            {/* Images to the right side */}
            <div className="grid-item-2">
              <div className="wrapper-project-img">
                <img src={teamimg} alt="team-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}
