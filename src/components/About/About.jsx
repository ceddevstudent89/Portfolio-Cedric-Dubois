import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>À propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImg.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/uiIcon.png")}
              alt="UI designer icon"
              className={styles.icon}
            />
            <div className={styles.aboutItemText}>
              <h3>Intégrateur Web</h3>
              <p>
                Je suis Cédric, intégrateur web en formation basé dans le
                département de l'yonne de la France. En tant qu'audodidacte
                passionné, j'ai acquis des compétences en développement web
                depuis 2023 et actuellement je valide mes acquis. Je peux vous
                accompagner dans la création de votre site web, l'intégration
                d'une maquette. Je développe principalement avec HTML, CSS,
                JavaScript, React.js. Tout cela dans le respect des bonnes
                pratiques, responsive design, optimisation du référencement
                (SEO) de votre site internet. N'hésitez pas à me contacter, je
                me ferai un plaisir de vous répondre !
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
