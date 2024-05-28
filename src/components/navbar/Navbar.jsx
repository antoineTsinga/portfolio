import { Github, Linkedin } from "../../utils/icons/icons.jsx";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
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
    </nav>
  );
}
