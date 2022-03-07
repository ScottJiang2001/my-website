import React from "react";
import Header from "./Header";
import "./Contact.scss";
import { contacts } from "./Images/SkillsLogos";

const Contact = () => {
	return (
		<div className="Contact" id="contact">
			<Header Section="Contact" />
			<div className="contactLogos">
				{contacts.map((contact) => (
					<span>
						<a href={contact.link} target="_blank" rel="noreferrer">
							{contact.logo}
						</a>
					</span>
				))}
			</div>
		</div>
	);
};

export default Contact;
