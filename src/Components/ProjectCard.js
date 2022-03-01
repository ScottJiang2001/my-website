import React, { useState } from "react";
import "./ProjectCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
	return (
		<div className="ProjectCard">
			<div className="projectPhoto">
                <img src={props.logo} className="projectPhoto"/>
            </div>
			<div className="projectDescription">
                asdfasdsadf
            </div>
		</div>
	);
};

export default ProjectCard;
