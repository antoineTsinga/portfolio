import "./Profile.css";

export default function Profile() {
  //   Langages : Java, Python, JavaScript, Spark/Scala, TypeScript, SQL
  // Frameworks : React, Angular, Django REST, Spring Boot, Node JS
  // Outils : Git, Docker, Figma, MySQL
  // Savoir-être : Travail d’équipe, adaptabilité, attitude de résolution de problèmes, autonome, communication,                                                     rigueur, persévérance

  const languages = [
    "Java",
    "Python",
    "JavaScript",
    "Spark/Scala",
    "TypeScript",
    "SQL",
  ];
  const frameworks = [
    "React",
    "Angular",
    "Django REST",
    "SpringBoot",
    "Node JS",
  ];

  const tools = ["Git", "Docker", "Figma", "MySQL"];
  return (
    <div className="section profil" id="about">
      <div className="hidden anim-translate-up">
        <h2> À propos</h2>
        <p style={{ textAlign: "center", marginBottom: "100px" }}>
          Ingénieur logiciel fullstack passionné, je transforme des idées en
          solutions innovantes et performantes.
        </p>
        <div className="profil-content">
          <div className="about">
            <h3>Apprendre à me connaître !</h3>
            <p>
              Diplômé de l'Institut Supérieur d’Électronique de Paris (ISEP)
              avec mention bien, j'ai acquis une solide formation en génie
              logiciel.
            </p>
            <p>
              Ma passion pour la programmation et les nouvelles technologies se
              reflète dans mon engagement constant à apprendre et à innover.
            </p>
            <p>
              En dehors du travail, je m'intéresse au dessin d'observation, aux
              échecs, et à l'animation japonaise, ce qui me permet de nourrir ma
              créativité et de m'inspirer dans mes projets professionnels.
            </p>
            <p>
              Mon objectif est de continuer à développer des solutions
              technologiques qui ont un impact positif tout en évoluant dans un
              environnement dynamique et collaboratif.
            </p>
            <a href="#contact" className="header-cta2">
              Contact
            </a>
          </div>
          <div className="profils-skills">
            <h3>Compétences</h3>

            <p>Langages</p>
            <div className="skills-list">
              {languages.map((l, index) => (
                <div
                  key={index}
                  className="skill  hidden anim-translate-right"
                  style={{ transitionDelay: index * 100 + "ms" }}
                >
                  {l}
                </div>
              ))}
            </div>
            <p>Frameworks</p>
            <div className="skills-list">
              {frameworks.map((l, index) => (
                <div
                  key={index}
                  className="skill hidden anim-translate-right"
                  style={{ transitionDelay: index * 100 + "ms" }}
                >
                  {l}
                </div>
              ))}
            </div>
            <p>Outils</p>
            <div className="skills-list">
              {tools.map((l, index) => (
                <div
                  key={index}
                  className="skill hidden anim-translate-right"
                  style={{ transitionDelay: index * 100 + "ms" }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
