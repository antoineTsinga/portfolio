import { useEffect, useRef, useState } from "react";
import { Github, Linkedin } from "../../utils/icons/icons.jsx";
import "./Navbar.css";
import MenuIcon from "./menu-icon/MenuIcon.jsx";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();

  return (
    <nav className="nav">
      <div className="navbar">
        <div className="logo-menu" id="home">
          <a href="#home" className="">
            <img
              className="memoji"
              src="/images/memoji-me-no-bg.png"
              alt="memoji antoine"
            />
          </a>
        </div>
        <div className="menu">
          <a href="#about" className="link">
            À propos
          </a>
          <a href="#experiences" className="link">
            Expériences
          </a>
          <a href="#t" className="link">
            Projets
          </a>
          <a href="#t" className=" link">
            Contact
          </a>
          <div>
            <a
              href="https://linkedin.com/in/antoine-tsinga-0363ba207/"
              className="social"
            >
              <Linkedin className="social-icon" />
            </a>
            <a href="https://github.com/antoineTsinga" className="social">
              <Github className="social-icon" />
            </a>
          </div>
        </div>

        <div className="burger-menu">
          <MenuIcon setOpen={setShowMenu} open={showMenu} />{" "}
        </div>
      </div>

      <div
        ref={ref}
        className="menu-burger-hidden"
        style={{ height: showMenu ? ref.current.scrollHeight : "0px" }}
      >
        <a href="#about" className="" onClick={() => setShowMenu(false)}>
          À propos
        </a>
        <a href="#experiences" className="" onClick={() => setShowMenu(false)}>
          Expériences
        </a>
        <a href="#t" className="" onClick={() => setShowMenu(false)}>
          Projets
        </a>
        <a href="#t" className="" onClick={() => setShowMenu(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}
