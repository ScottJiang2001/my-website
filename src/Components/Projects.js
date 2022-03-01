import React from "react";
import Header from "./Header";
import "./Projects.scss";
import { experiences } from "./Images/SkillsLogos";
import ProjectCard from "./ProjectCard";
import battleshipProject from"./Images/battleshipProject.png"

const Projects = () => {
	return (
		<div className="Projects">
			<Header Section="Projects" />
			{experiences.map((company) => (
				<ProjectCard
					logo={battleshipProject}
					companyName={company.name}
					position={company.position}
					date={company.date}
                    link={company.link}
                    location={company.location}
					skills={company.skills}
					description={company.description}
				/>
			))}
		</div>
	);
};

export default Projects;