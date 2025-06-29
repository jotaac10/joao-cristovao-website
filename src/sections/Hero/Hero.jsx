import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/me.png";

import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

import instagramLight from "../../assets/instagram.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight  from "../../assets/linkedin-light.svg";
import linkedinDark  from "../../assets/linkedin-dark.svg";

import CV from "../../assets/cv.pdf";
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;

  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Joao Cristovao"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}                                   
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          João
          <br />
          Cristóvão
        </h1>
        <span>
          <a href="https://www.instagram.com/jotaac10/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/jotaac10" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-crist%C3%B3v%C3%A3o-9a4550206/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <h2 className="h2-job"> IPCB Student </h2>
        <p className={styles.description}>With a passion for turning ideas into digital solutions</p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
