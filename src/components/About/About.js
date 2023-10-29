import styles from "./About.module.css";
import image from "../../assets/Daria.png"

const About = () => {
  return (
    <section id="about" >
      <div className={styles["about-container"]}>
        <div className={styles["about-me-bio"]}>
        <h1>About Me</h1>
        <p>Hi!I'm Daria. </p>
        <p>
          I'm a Junior Frontend Developer who recently began a new chapter in my
          life. Before this I was working as a Project Manager and decided to
          try something new.
        </p>
        <p>Addicted to music, travelling, and k-dramas. </p>
      </div>

      <div>
        <img src={image} className={styles["about-me-img"]} alt="of Daria" />
      </div></div>
    </section>
  );
};

export default About;
