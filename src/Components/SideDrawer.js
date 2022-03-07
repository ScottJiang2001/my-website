import React, { useState } from "react";
import "./SideDrawer.scss";
import pdf from "./Images/webResume_old.pdf";

const SideDrawer = (props) => {
	const menuOptions = [
		{
			ref: "#about",
			name: "About",
			target: "_self",
		},
		{
			ref: "#experience",
			name: "Experience",
			target: "_self",
		},
		{
			ref: "#projects",
			name: "Projects",
			target: "_self",
		},
		{
			ref: "#contact",
			name: "Contact",
			target: "_self",
		},
		{
			ref: pdf,
			name: "Resume",
			target: "_blank",
		},
	];

	return (
		<div className={props.show ? "dropDown" : "dropDown hide"}>
			{menuOptions.map((option) => (
				<a href={option.ref} target={option.target} onClick={props.showMenu}>
					{option.name}
				</a>
			))}
		</div>
	);
};

export default SideDrawer;
