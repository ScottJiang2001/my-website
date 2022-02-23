import React from "react";
import Header from "./Header";
import "./Experience.scss";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./Images/SkillsLogos";

const Experience = () => {
	return (
		<div className="Experience">
			<Header Section="Experience" />
			{experiences.map((company) => (
				<ExperienceCard
					logo={company.logo}
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

export default Experience;
