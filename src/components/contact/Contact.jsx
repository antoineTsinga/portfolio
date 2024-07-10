import { Github, Linkedin } from "../../utils/icons/icons";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="text-center mx-auto">
        <h2 className="section-title">Contactez-moi</h2>
        <p
          className="section-subtitle "
          style={{
            textAlign: "center",
            marginBottom: "100px",
            padding: "0 1rem",
          }}
        >
          Si vous pensez que mon expérience et mes compétences correspondent
          bien à votre entreprise, ou si vous souhaitez simplement me dire
          bonjour, n'hésitez pas à me contacter !
        </p>

        <div className="contact-media">
          <a href="https://linkedin.com/in/antoine-tsinga-0363ba207/">
            <Linkedin className="social-media" />
          </a>
          <a href="https://github.com/antoineTsinga">
            <Github className="social-media" />
          </a>
          <a href="mailto:antoine.tsinga@gmail.com" className="link-contact">
            antoine.tsinga@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
