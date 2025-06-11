import React, { useState } from "react";
import styles from "./ProjectsStyles.module.css";

import viberr from "../../assets/viberr.png";
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import myWebsite from '../../assets/myWebsite.png';

import ProjectCard from "../../common/ProjectCard";
import UnityGame from "../UnityGame";

function Projects() {
  const [unityGamePath, setUnityGamePath] = useState(null);

  const handlePlay = (gamePath) => {
    setUnityGamePath(gamePath);
  };

  const closeGame = () => {
    setUnityGamePath(null);
  };

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          h3="Aventura dos Reinos"
          p="2D Game"
          githubLink="https://github.com/jotaac10/Aventura-Dos-Reinos"
          playLink="/aventuraDosReinos/index.html"
          onPlay={handlePlay}
        />
        <ProjectCard
          src={freshBurger}
          h3="Galatic Rift"
          p="Spacial Game"
          githubLink="https://github.com/jotaac10/GalaticRift"
          showPlay={false}
        />
        <ProjectCard
          src={hipsster}
          h3="Ludo EST"
          p="3D Game"
          githubLink="https://github.com/jotaac10/LudoKing3DGame"
          playLink="/ludoEst/index.html"
          onPlay={handlePlay}
        />
        <ProjectCard
          src={fitLift}
          h3="Scramble Master"
          p="AR Game"
          githubLink="https://github.com/jotaac10/Receita-Ovos-Mexidos---AR-Project"
          showPlay={false}
        />
        <ProjectCard
          src={myWebsite}
          h3="MyWebsite"
          p="React Website"
          githubLink="https://github.com/jotaac10/joao-cristovao-website"
          showPlay={false}
        />
        
      </div>

      {}
      {unityGamePath && <UnityGame gamePath={unityGamePath} onClose={closeGame} />}
    </section>
  );
}

export default Projects;
