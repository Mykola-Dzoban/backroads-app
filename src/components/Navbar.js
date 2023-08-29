import React, { useState } from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const navLinksClass = isNavOpen ? "nav-links show-links" : "nav-links";

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={navLinksClass}>
          {pageLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="nav-link"
                onClick={closeNav} 
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="nav-icon">
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
