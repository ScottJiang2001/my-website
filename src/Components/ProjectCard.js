import React, { useState } from "react";
import "./ProjectCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { devpostLogo, githubLogo } from "./Images/SkillsLogos";
import { render } from "@testing-library/react";

const ProjectCard = (props) => {
	const renderLinks = () => {
		return (
			<div className="links">
				{props.devpost ? <a href={props.devpost} target="_blank" rel="noreferrer"><span>Devpost{devpostLogo()}</span></a> : null}
				{props.github ? <a href={props.github} target="_blank" rel="noreferrer"><span>Github{githubLogo()}</span></a> : null}
			</div>
		)
	}

	return (
		<div className="ProjectCard">
			<div className="projectPhoto" style={{ backgroundImage: `url(${props.logo})` }}></div>
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
