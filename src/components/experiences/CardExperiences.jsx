import "./CardExperiences.css";
import fr from "../../utils/icons/Docker.svg";
// company: "Sopra Steria",
//       location: "Paris, France",
//       title: "Stagiaire Software Engineer Fullstack",
//       period: "Février 2023 – Août 2023",
//       details: [
export default function CardExperiences({
  props,
  img,
  company,
  location,
  title,
  period,
  details,
  side,
}) {
  return (
    <div className={`card-container ${side}-card-container`}>
      <img src={fr} alt={company} />
      <div className={`text-box hidden anim-translate-${side}`}>
        <div className="card-title">{company}</div>
        <div className="card-title">{title}</div>
        <small>{period}</small>
        <p>{details}</p>
        <span className={`${side}-card-container-arrow`}></span>
      </div>
    </div>
  );
}
