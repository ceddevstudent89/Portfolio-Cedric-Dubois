import styles from "./TimeLine.module.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

// Example timeline elements
const MyTimeline = () => {
  return (
    <section className={styles.container}>
      <VerticalTimeline lineColor="#fff">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - présent"
          contentStyle={{
            background: "#19376d",
            color: "#fffef9",
            boxShadow: "1px 3px 5px #fff",
          }}
          contentArrowStyle={{ borderRight: "15px solid rgb(255,255,242)" }}
          iconStyle={{ background: "#576cbc", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Formation Intégrateur Web (Niveau BAC+2)
          </h3>
          <p className="vertical-timeline-element-subtitle">
            École Openclassrooms, France.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="custom-timeline-element"
          contentStyle={{
            background: "#19376d",
            color: "#fffef9",
            boxShadow: "1px 3px 5px #fff",
          }}
          contentArrowStyle={{ borderRight: "15px solid rgb(255,255,242)" }}
          date="2004 - 2023"
          iconStyle={{ background: "#576cbc", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Auxilaire de vie sociale (Diplômé d'un DEAVS)
          </h3>
          <p className="vertical-timeline-element-subtitle">
            Yonne(89), France.
          </p>
          <p>
            J'ai accumulé 19 années d'expérience 🌟 dans le domaine de
            l'assistance aux personnes fragiles et handicapés.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="custom-timeline-element"
          contentStyle={{
            background: "#19376d",
            color: "#fffef9",
            boxShadow: "1px 3px 5px #fff",
          }}
          contentArrowStyle={{ borderRight: "15px solid rgb(255,255,255)" }}
          date="1996 - 1997"
          iconStyle={{ background: "#576cbc", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Diplôme du Baccalaureat Technologique
          </h3>
          <p className="vertical-timeline-element-subtitle">
            En Sciences et Technologies Industrielles Specialite : Génie
            Électronique
          </p>
          <p>Lycée Pierre et Marie Currie à Sens (89).</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="custom-timeline-element"
          contentStyle={{
            background: "#19376d",
            color: "#fffef9",
            boxShadow: "1px 3px 5px #fff",
          }}
          contentArrowStyle={{ borderRight: "15px solid rgb(255,255,242)" }}
          date="1994 - 1996"
          iconStyle={{ background: "#576cbc", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Diplôme du Brevet d'étude d'électronicien
          </h3>
          <p className="vertical-timeline-element-subtitle">
            Lycée Pierre et Marie Currie à Sens (89).
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default MyTimeline;
