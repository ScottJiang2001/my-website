import React, {useState} from "react";
import "./ExperienceCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ExperienceCard = (props) => {
	const [expand, setExpand] = useState(false)

	return (
		<div className={expand ? "ExperienceCard Expand" : "ExperienceCard"}>
			<div className="companyAndInfo">
				<div className="companyLogo">
					<a href={props.link} target="_blank" rel="noreferrer">
						<img src={props.logo} alt="not available"  />
					</a>
				</div>
				<div className="information">
					<p>
						<b>
							<a href={props.link} target="_blank" rel="noreferrer">
								{props.companyName}
							</a>
						</b>{" "}
						- {props.position}
					</p>
					<p> {props.date} </p>
				</div>
			</div>
			<div className="icon">
				<FontAwesomeIcon icon={faAngleDown} size="2xl" onClick={() => setExpand(!expand)} className={expand? "arrow up" : "arrow"}/>
			</div>
			<div className="description">
				<p>rd-wrap: break-word has been replaced with overflow-wrap: break-word; which works in every modern browser. IE, being a dead browser, will forever rely on the deprecated and non-standard word-wrap instead.</p>
				<p className="location"> {props.location}</p>
			</div>
		</div>
	);
};

export default ExperienceCard;
