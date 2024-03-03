import React from "react";
import "./AboutMe.scss";
import UsersLogos from ".";
import { Skills } from "./Images/SkillsLogos";
import Header from "./Header";
import scottphoto from "./Images/scott_photo.jpg";

const AboutMe = () => {
	return (
		<div className="About" id="about">
			<Header Section="About Me" />
			<div className="descriptionAndPhoto">
				<div className="description">
					<p>
						Hi, thanks for stopping by! My name's Scott and I'm an undergraduate student studying electrical engineering at UBC. Feel free to take a look around!	
					</p>
					<p>These are some technologies I’ve worked with:</p> 
					<UsersLogos users={Skills} />
				</div>
				<div className="Image">
					<img src={scottphoto} />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
