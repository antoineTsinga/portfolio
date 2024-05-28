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
        <p style={{ textAlign: "center" }}>
          Ingénieur logiciel fullstack passionné, je transforme des idées en
          solutions innovantes et performantes.
        </p>
        <div className="profil-content">
          <div className="about">
            <h3>Apprendre à me connaître !</h3>
            <p>
              Je m'appelle Antoine Tsinga, et je suis un ingénieur logiciel
              fullstack passionné basé à Paris, France. Diplômé de l'Institut
              Supérieur d’Électronique de Paris (ISEP) avec mention bien, j'ai
              acquis une solide formation en génie logiciel, couvrant des
              domaines tels que le développement Web/Mobile, la programmation
              orientée objet, les structures de données et les algorithmes, la
              sécurité logicielle, et bien plus encore.
            </p>
            <p>
              Je suis reconnu pour mon esprit d'équipe, mon adaptabilité, et ma
              capacité à résoudre des problèmes de manière autonome. Ma passion
              pour la programmation et les nouvelles technologies se reflète
              dans mon engagement constant à apprendre et à innover.
            </p>
            <p>
              En dehors du travail, je m'intéresse au dessin d'observation, aux
              échecs, et à l'animation japonaise, ce qui me permet de nourrir ma
              créativité et de m'inspirer dans mes projets professionnels. Mon
              objectif est de continuer à développer des solutions
              technologiques qui ont un impact positif tout en évoluant dans un
              environnement dynamique et collaboratif.
            </p>
          </div>
          <div className="profils-skills">
            <h3>Compétences</h3>

            <p>Langages</p>
            <div className="skills-list">
              {languages.map((l, index) => (
                <div
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
