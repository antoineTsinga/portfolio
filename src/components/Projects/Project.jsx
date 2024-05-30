import CardProject from "./CardProject";
import "./Project.css";

export default function Project() {
  const projects = [
    {
      img: "/images/ancachess.png",
      title: "Project",
      description: "Description of the project",
      prod: "",
      github: "github",
    },
  ];

  return (
    <div className="section">
      <section className="marketing-section">
        <div className="container">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="section-title">Réalisations</h2>
            <p className="section-subtitle">
              Explorez mes réalisations en développement logiciel, où innovation
              et expertise technique se rencontrent pour résoudre des problèmes
              complexes.
            </p>
          </div>
          <div className="grid">
            {projects.map((project, index) => (
              <CardProject key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#aef" className="header-cta">
              Contactez moi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
