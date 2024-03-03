import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

// export default function ProjectCard({
//   project: {
//     title,
//     imageSrc,
//     iconHeart,
//     iconSave,
//     description,
//     skills,
//     demo,
//     source,
//   },
// }) {
//   return (
//     <ul className={styles.cardList}>
//       <li className={styles.card}>
//         <img
//           src={getImageUrl(imageSrc)}
//           alt={`Image du projet ${title}`}
//           className={styles.clippedImg}
//         />
//         <div className={styles.content}>
//           <p className={styles.cardLocation}>Bali</p>
//           <div className={styles.actionsContainer}>
//             <button className={styles.actionBtn}>
//               <img src={getImageUrl(iconHeart)} alt="like this place" />
//             </button>
//             <button className={styles.actionBtn}>
//               <img src={getImageUrl(iconSave)} alt="save this place" />
//             </button>
//           </div>
//         </div>
//       </li>
//     </ul>
//   );
// }

export default function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image du projet ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
}
