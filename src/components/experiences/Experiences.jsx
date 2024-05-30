import CardExperiences from "./CardExperiences";
import "./Experiences.css";

export default function Experiences() {
  const experiences = [
    {
      company: "Orthoin3D",
      location: "Paris, France",
      title: "Stagiaire Software Engineer",
      period: "Septembre 2021 – Février 2022",
      details: [
        " Maintenance corrective et évolutive d’un logiciel de planification de production d’aligneur dentaire Inplan",
        " Mise en place de tests frontaux automatisés de bout en bout pour  valider l'intégrité de l'application",
        " Montée de la version de la bibliothèque de traitement 3D pour s’aligner sur les spécificités clients",
      ],
      technos: [
        "Javascript",
        "React",
        "Python",
        "Django REST framework",
        "Cypress",
        "shortcut",
      ],
    },
    {
      company: "Orthoin3D",
      location: "Paris, France",
      title: "Junior Software Engineer (temps partiel)",
      period: "Avril 2022 – Juillet 2022",
      details: [
        "Maintenance corrective et évolutive du logiciel de planification de production d’aligneur dentaire Inplan",
      ],
      technos: [
        "Javascript",
        "React",
        "Python",
        "Django REST framework",
        "Cypress",
        "shortcut",
      ],
    },
    {
      company: "Sopra Steria",
      location: "Paris, France",
      title: "Stagiaire Software Engineer Fullstack",
      period: "Février 2023 – Août 2023",
      details: [
        "Industrialisation d’un chantier manuel d'Enedis de suivi de consommation par la mise en place d'un outillage spécifique et d'une IHM",
        "Amélioration et refactorisation du code de traitement de reporting, augmentant la vitesse de traitement de 15%",
        "Création d'une API pour relier le reporting des données à l'interface frontale et mise en place de tests avec un taux de couverture de plus de 90%",
      ],
      technos: [
        "Java",
        "Angular",
        "Scala",
        "Hive/HDFS/Spark",
        "Elasticsearch",
        "SonarQube",
        "JUnit5",
        "Mockito",
        "Jenkins",
        "JIRA",
        "Confluence",
      ],
    },
  ];

  const leftOrRight = ["left", "right"];

  return (
    <section className="section experiences" id="experiences">
      <div className="hidden anim-translate-up">
        <h2>Expériences</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <CardExperiences
              key={index}
              side={leftOrRight[index % 2]}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
