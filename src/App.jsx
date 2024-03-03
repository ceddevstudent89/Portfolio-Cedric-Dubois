import styles from "./App.module.css";
import Navbar from "../src/components/Navbar/Navbar";
import Hero from "../src/components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import MyTimeline from "./components/TimeLine/TimeLine";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <MyTimeline />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
