import React from "react";
import Header from "./Header";
import "./Projects.scss";
import { projects } from "./Images/SkillsLogos";
import ProjectCard from "./ProjectCard";
import battleshipProject from"./Images/battleshipProject.png"
import localsznProject from "./Images/localsznProject.png"


const Projects = () => {
	return (
		<div className="Projects">
			<Header Section="Projects" />
			{projects.map((project) => (
				<ProjectCard
					logo={project.image}
				/>
			))}
		</div>
	);
};

export default Projects;