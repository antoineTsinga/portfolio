import { Github, Linkedin } from "../../utils/icons/icons";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="text-center max-w-lg mx-auto">
        <h2 className="section-title">Contactez-moi</h2>
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
