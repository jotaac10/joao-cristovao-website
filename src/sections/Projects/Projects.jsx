import React, { useState } from "react";
import styles from "./ProjectsStyles.module.css";

import viberr from "../../assets/viberr.png";
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          index={0}
          isExpanded={expandedIndex === 0}
          onToggle={toggleCard}
          src={viberr}
          h3="Aventura dos Reinos"
          p="2D Game"
          githubLink="https://github.com/teu-user/aventura-dos-reinos"
          playLink="https://jogo-aventura.com"
        />
        <ProjectCard
          index={1}
          isExpanded={expandedIndex === 1}
          onToggle={toggleCard}
          src={freshBurger}
          h3="Galatic Rift"
          p="Spacial Game"
          githubLink="https://github.com/teu-user/galatic-rift"
          showPlay={false} 
        />
        <ProjectCard
          index={2}
          isExpanded={expandedIndex === 2}
          onToggle={toggleCard}
          src={hipsster}
          h3="Ludo EST"
          p="3D Game"
          githubLink="https://github.com/teu-user/ludo-est"
          playLink="https://jogo-ludo.com"
        />
        <ProjectCard
          index={3}
          isExpanded={expandedIndex === 3}
          onToggle={toggleCard}
          src={fitLift}
          h3="Scramble Master"
          p="AR Game"
          githubLink="https://github.com/teu-user/scramble-master"
          showPlay={false} 
        />
      </div>
    </section>
  );
}

export default Projects;
