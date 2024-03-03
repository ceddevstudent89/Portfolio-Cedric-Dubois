import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import { useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["suis Intégrateur Web", "m'appelle Cédric"],
    loop: 1,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Je
          <span> {typeEffect}</span>
        </h1>
        <p className={styles.description}>
          Je suis intégrateur web en formation, j'apprends à utiliser React.
          N'hésitez pas à me contacter si vous souhaitez en savoir plus !
        </p>

        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="linkedIn icon"
            />
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
          </li>
        </ul>
      </div>
      <img
        src={getImageUrl("hero/mf-avatar.svg")}
        alt="Image de mon avatar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
