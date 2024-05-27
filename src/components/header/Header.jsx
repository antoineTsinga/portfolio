import "./Header.css";
export default function Header() {
  return (
    <section className="section header">
      <div>
        <h1 className="header-title">
          Bonjour et bienvenue,
          <br /> je suis Antoine Tsinga
        </h1>
      </div>
      <div>
        <p>Je suis Junior Software Engineer</p>
      </div>
      <div>
        <a className="header-cta" href="#t">
          Découvrir plus
        </a>
      </div>
    </section>
  );
}
