import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-menu">
        <img
          className="memoji"
          src="/images/memoji-me-no-bg.png"
          alt="memoji antoine"
        />
        Antoine Tsinga
      </div>
      <div className="menu">
        <a href="#t" className="link">
          Éducation
        </a>
        <a href="#t" className="link">
          Compétences
        </a>
        <a href="#t" className="link">
          Expériences
        </a>
        <a href="#t" className="link">
          Réalisations
        </a>
        <a href="#t" className=" btn-cta">
          Contactez
        </a>
      </div>
    </nav>
  );
}
