import CardExperiences from "./CardExperiences";
import "./Experiences.css";

export default function Experiences() {
  const experiences = [
    {
      company: "Orthoin3D",
      location: "Paris, France",
      title: "Stagiaire Software Engineer",
      period: "Septembre 2023 – Février 2023",
      details: [
        <li>
          Maintenance corrective et évolutive d’un logiciel de planification de
          production d’aligneur dentaire Inplan
        </li>,
        <li>
          Mise en place de tests frontaux automatisés de bout en bout pour
          valider l'intégrité de l'application
        </li>,
        <li>
          Montée de la version de la bibliothèque de traitement 3D pour
          s’aligner sur les spécificités clients
        </li>,
      ],
    },
    {
      company: "Orthoin3D",
      location: "Paris, France",
      title: "Junior Software Engineer (temps partiel)",
      period: "Avril 2023 – Juillet 2023",
      details: [
        <li>
          Maintenance corrective et évolutive du logiciel de planification de
          production d’aligneur dentaire Inplan
        </li>,
      ],
    },
    {
      company: "Sopra Steria",
      location: "Paris, France",
      title: "Stagiaire Software Engineer Fullstack",
      period: "Février 2023 – Août 2023",
      details: [
        <li>
          Industrialisation d’un chantier manuel d'Enedis de suivi de
          consommation par la mise en place d'un outillage spécifique et d'une
          IHM
        </li>,
        <li>
          Amélioration et refactorisation du code de traitement de reporting,
          augmentant la vitesse de traitement de 15%
        </li>,
        <li>
          Création d'une API pour relier le reporting des données à l'interface
          frontale et mise en place de tests avec un taux de couverture de plus
          de 90%
        </li>,
      ],
    },
  ];

  const leftOrRight = ["left", "right"];
  return (
    <section className="section experiences" id="experiences">
      <div className="hidden">
        <h2>Expériences</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <CardExperiences side={leftOrRight[index % 2]} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
