import React, { useState } from "react";
import "./ProjectCard.scss";
import { linkLogo, githubLogo } from "./Images/SkillsLogos";

const ProjectCard = (props) => {
	const renderLinks = () => {
		return (
			<div className="links">
				{props.devpost ? (
					<a href={props.devpost} target="_blank" rel="noreferrer">
						<span>Devpost{linkLogo()}</span>
					</a>
				) : null}
				{props.github ? (
					<a href={props.github} target="_blank" rel="noreferrer">
						<span>Github{githubLogo()}</span>
					</a>
				) : null}
			</div>
		);
	};

	return (
		<div
			className="ProjectCard"
			style={{ backgroundImage: `url(${props.logo})` }}
		>
			<div
				className="projectImage"
				style={{ backgroundImage: `url(${props.logo})` }}
			></div>
			<div className="projectDescription">
				<div>
					<h2> {props.name} </h2>
					<p>{props.description} </p>
				</div>
				<div className="skillsAndLinks">
					<div className="skills">
						{props.skills.map((skill) => (
							<span>{skill}</span>
						))}
					</div>
					{renderLinks()}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
