import "./Header.css";
export default function Header() {
  return (
    <section className="header">
      <div className="header-title-container">
        <h1 className="header-title hidden anim-translate-down">
          Bonjour et bienvenue,
          <br /> je suis Antoine Tsinga
        </h1>
      </div>
      <div>
        <p>Je suis Junior Software Engineer</p>
      </div>
      <div>
        <a className="header-cta" href="#about">
          Découvrir plus
        </a>
      </div>
    </section>
  );
}
