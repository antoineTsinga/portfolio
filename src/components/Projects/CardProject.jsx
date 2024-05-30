import "./CardProject.css";

export default function CardProject({ img, title, description }) {
  return (
    <div className="card">
      <img className="icon" src={img} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{description}</p>
    </div>
  );
}
