import React from "react";
import Header from "./Header";
import "./Projects.scss";
import { projects } from "./Images/SkillsLogos";
import ProjectCard from "./ProjectCard";


const Projects = () => {
	return (
		<div className="Projects" id="projects">
			<Header Section="Projects" />
			{projects.map((project) => (
				<ProjectCard
					logo={project.image}
					name={project.name}
					description={project.description}
					skills={project.skills}
					github={project.github}
					devpost={project.devpost}
				/>
			))}
		</div>
	);
};

export default Projects;