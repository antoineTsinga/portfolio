import { FluentOpen16Filled, Github } from "../../utils/icons/icons";
import "./CardProject.css";

export default function CardProject({
  img,
  title,
  description,
  technos,
  github,
  prod,
}) {
  return (
    <div className="card">
      <div className="image-container">
        <img className="image" src={img} alt={title} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      <div className="technos-proj">
        {technos &&
          technos.map((l, index) => (
            <div key={index} className="techno-proj">
              {l}
            </div>
          ))}
      </div>
      <div className="code-prod">
        <a href={prod} className="social">
          <FluentOpen16Filled className="social-icon" />
        </a>
        <a href={github} className="social">
          <Github className="social-icon" />
        </a>
      </div>
    </div>
  );
}
