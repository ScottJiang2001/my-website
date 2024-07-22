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
						I'm from Calgary, Alberta (go flames🔥) and currently studying Electrical Engineering at the University of British Columbia in Vancouver, BC. I love going to the gym 💪 and playing video games 🎮 in my free time.				</p>
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
