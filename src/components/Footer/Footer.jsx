import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.waves}>
        <div className={styles.wave} id={styles.wave1}></div>
        <div className={styles.wave} id={styles.wave2}></div>
        <div className={styles.wave} id={styles.wave3}></div>
        <div className={styles.wave} id={styles.wave4}></div>
      </div>

      <ul className={styles.socialIcons}>
        <li>
          <a href="#">
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="image email icon"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="linkedin icon"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="github icon"
            />
          </a>
        </li>
      </ul>

      <ul className={styles.menu}>
        <li>
          <a href="#home">Accueil</a>
        </li>
        <li>
          <a href="#about">A Propos</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <p>Portfolio de Mr Dubois Cédric - Intégrateur Web</p>

      <p>Tous droits réservés &copy; {date}</p>
    </footer>
  );
}
