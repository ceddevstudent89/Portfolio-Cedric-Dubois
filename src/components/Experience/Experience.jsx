import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

import { getImageUrl } from "../../utils.js";

export default function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={`Le logo du langage informatique ${skill.title}`}
                  />
                </div>
                <h3>{skill.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
