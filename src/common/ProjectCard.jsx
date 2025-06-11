import React from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, h3, p, githubLink, playLink, showPlay = true }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={src} alt={`${h3} logo`} />
        <div className={styles.buttons}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" title="Ver no GitHub">
            <FaGithub className={`${styles.icon} ${styles.github}`} />
          </a>
          {showPlay && playLink && (
            <a href={playLink} target="_blank" rel="noopener noreferrer" title="Jogar">
              <FaPlay className={`${styles.icon} ${styles.play}`} />
            </a>
          )}
        </div>
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

export default ProjectCard;
