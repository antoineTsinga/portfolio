import CardProject from "./CardProject";
import "./Project.css";

export default function Project() {
  const projects = [
    {
      img: "/images/ancachess.png",
      title: "Online Chess platform",
      description: "Platforme de jeu d'éches en ligne",
      prod: "https://ancachess.vercel.app/",
      github: "https://github.com/antoineTsinga/chessgame",
      technos: ["React", "Django"],
    },
    {
      img: "/images/hifashowase.png",
      title: "Hight fashion showcase",
      description:
        "Site vitrine destiné à un couturier pour exposer des créations et prendre des commandes",
      prod: "https://onix-dev.vercel.app/",
      github: "https://github.com/antoineTsinga/HiFaShowcase",
      technos: ["React", "Spring boot"],
    },
    {
      img: "/images/stream-tv.png",
      title: "StreamTV",
      description:
        "Site de recommendation de films et séries basé sur les preférences de utilisateur et les tendances",
      prod: "https://streamtv.vercel.app/",
      github: "",
      technos: ["Angular", "Spring boot"],
    },
  ];

  return (
    <div className="section project" id="projects">
      <div className="hidden anim-translate-up">
        <section className="marketing-section">
          <div className="container">
            <div className="text-center max-w-lg mx-auto">
              <h2 className="section-title">Réalisations</h2>
              <p className="section-subtitle">
                Explorez mes réalisations en développement logiciel, où
                innovation et expertise technique se rencontrent pour résoudre
                des problèmes complexes.
              </p>
            </div>
            <div className="grid">
              {projects.map((project, index) => (
                <CardProject key={index} {...project} />
              ))}
            </div>
            {/* <div className="text-center mt-12">
              <a href="#aef" className="header-cta">
                Contactez moi
              </a>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
