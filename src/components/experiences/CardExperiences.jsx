import { useRef, useState } from "react";
import fr from "../../utils/icons/Docker.svg";
import "./CardExperiences.css";
import internIcons from "../../utils/icons/internship-icon.svg";
export default function CardExperiences({
  img,
  company,
  location,
  title,
  period,
  details,
  side,
  technos,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  return (
    <div className={`card-container ${side}-card-container`}>
      <img src={fr} alt={company} />
      <div className={`text-box hidden anim-translate-${side}`}>
        <div className="card-title">{company}</div>
        <div className="card-title">{title}</div>
        <small>{`${period}, ${location}`}</small>

        <div
          ref={contentRef}
          className={`content`}
          style={{ height: isOpen ? contentRef.current.scrollHeight : "0px" }}
        >
          <div>
            {details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          <div className="technos">
            {technos &&
              technos.map((l, index) => (
                <div key={index} className="techno">
                  {l}
                </div>
              ))}
          </div>
        </div>

        <span className={`${side}-card-container-arrow`}></span>
        <button
          className="experience-show-btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {!isOpen ? "Voir plus" : "Voir moins"}
        </button>
      </div>
    </div>
  );
}
