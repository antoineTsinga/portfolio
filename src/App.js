import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Education from "./components/education/Education";
import Profile from "./components/profile/Profile";

const experiences = [
  {
    company: "Sopra Steria",
    location: "Paris, France",
    title: "Stagiaire Software Engineer Fullstack",
    period: "Février 2023 – Août 2023",
    details: [
      "Industrialisation d’un chantier manuel de suivi de consommation d'Enedis par la mise en place d'un outillage spécifique et d'une IHM",
      "Amélioration et refactorisation du code de traitement de reporting, augmentant la vitesse de traitement de 15%",
      "Création d'une API pour relier le reporting des données à l'interface frontale et mise en place de tests avec un taux de couverture de plus de 90%",
    ],
  },
  {
    company: "Orthoin3D",
    location: "Paris, France",
    title: "Stagiaire Software Engineer",
    period: "Septembre 2023 – Février 2023",
    details: [
      "Maintenance corrective et évolutive d’un logiciel de planification de production d’aligneur dentaire",
      "Mise en place de tests frontaux automatisés de bout en bout pour valider l'intégrité de l'application",
      "Montée de la version de la bibliothèque de traitement 3D pour s’aligner sur les spécificités clients",
    ],
  },
];

function App() {
  return (
    <div className="App">
      <div className="firstview">
        <Navbar />
        <Header />
      </div>
      <Profile />

      <Education />

      {/* <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Antoine Tsinga</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#education">Éducation</Nav.Link>
            <Nav.Link href="#skills">Compétences</Nav.Link>
            <Nav.Link href="#experience">Expériences</Nav.Link>
            <Nav.Link href="#projects">Projets</Nav.Link>
            <Nav.Link href="#achievements">Réalisations</Nav.Link>
            <Nav.Link href="#testimonials">Témoignages</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <header className="App-header">
          <h1>Antoine Tsinga</h1>
          <p>Software Engineer Fullstack, Paris France</p>
          <p>Contact: +33 758742556 | antoine.tsinga@gmail.com</p>
          <p>
            <a
              href="https://linkedin.com/in/antoine-tsinga"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://github.com/antoineTsinga"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              GitHub
            </a>
          </p>
        </header>

        <section id="education">
          <h2>Éducation</h2>
          <h3>
            ISEP (Institut Supérieur d’Électronique de Paris) – Mention Bien
          </h3>
          <p>
            Diplôme d’ingénieur, Génie Logiciel (Septembre 2020 – Septembre
            2023)
          </p>
          <p>
            Développement Web/Mobile, TDD, Programmation Orientée Objet,
            Structure de donnée et algorithmes, Base de données et Big data,
            Système design, Architectures et Programmation distribuées, Sécurité
            logicielle, Data Science, Réseaux, Agile Scrum
          </p>
        </section>

        <section id="skills">
          <h2>Compétences</h2>
          <Row>
            <Col>
              <strong>Langages:</strong> Java, Python, JavaScript, Spark/Scala,
              TypeScript, SQL
            </Col>
            <Col>
              <strong>Frameworks:</strong> React, Angular, Django REST, Spring
              Boot, Node JS
            </Col>
            <Col>
              <strong>Outils:</strong> Git, Docker, Figma, MySQL
            </Col>
            <Col>
              <strong>Savoir-être:</strong> Travail d’équipe, adaptabilité,
              attitude de résolution de problèmes, autonome, communication,
              rigueur, persévérance
            </Col>
          </Row>
        </section>

        <section id="experience">
          <h2>Expériences Professionnelles</h2>
          <Timeline experiences={experiences} />
        </section>

        <section id="achievements">
          <h2>Réalisations</h2>
          <Row>
            <ProjectCard
              title="Application d'Afterwork"
              description="Application réactive permettant aux collaborateurs d'organiser et de participer à des Afterwork. Privée"
              link=""
              image="https://via.placeholder.com/150"
            />
            <ProjectCard
              title="Site Vitrine Haute Couture"
              description="Développement d'un site web pour un couturier afin d'exposer ses créations."
              link="https://github.com/antoineTsinga/HiFaShowcase"
              image="https://via.placeholder.com/150"
            />
            <ProjectCard
              title="Plateforme de Jeu d'Échecs"
              description="Plateforme de jeu d'échec en ligne permettant de lancer et rejoindre des parties."
              link="https://github.com/antoineTsinga/ancachessback"
              image="https://via.placeholder.com/150"
            />
            <ProjectCard
              title="Application web le jeu de la vie"
              description="Une petite application web qui implemante les règles du célèbre je de la vie"
              link="https://github.com/antoineTsinga/game-of-life"
              image="https://via.placeholder.com/150"
            />
          </Row>
        </section>

        <section id="testimonials">
          <h2>Témoignages</h2>
          <blockquote>
            "Antoine a démontré une capacité exceptionnelle à résoudre des
            problèmes complexes et à travailler efficacement en équipe. Son sens
            de l'initiative et sa rigueur ont été des atouts majeurs pour notre
            projet." - <strong>Superviseur à Sopra Steria</strong>
          </blockquote>
        </section>

        <section id="contact">
          <h2>Contactez-moi</h2>
          <p>
            Pour toute question ou collaboration, n'hésitez pas à me contacter
            par email ou via LinkedIn.
          </p>
        </section>
      </Container> */}
    </div>
  );
}

export default App;
