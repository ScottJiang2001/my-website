import React, { useState } from "react";
import "./NavBar.scss";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect } from "react/cjs/react.production.min";
import pdf from "./Images/Scottjiang_resume_2022.pdf";

const NavBar = (props) => {
	const [navBar, setNavBar] = useState(false);

	const changeNavBar = () => {
		if (window.scrollY >= 20) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	};

	window.addEventListener("scroll", changeNavBar);

	const menuOptions = [
		{
			ref: "#about",
			name: "About",
            target: "_self"
		},
		{
			ref: "#experience",
			name: "Experience",
            target: "_self"
		},
		{
			ref: "#projects",
			name: "Projects",
            target: "_self"
		},
		{
			ref: "#contact",
			name: "Contact",
            target: "_self"
		},
		{
			ref: pdf,
			name: "Resume",
            target: "_blank"
		},
	];

	return (
		<>
			<div className={navBar ? "Navigation scroll" : "Navigation"}>
				<div className="leftSide">
					<a className="home"> scott 江 </a>
				</div>
				<div className="rightSide">
					<div className="Options">
						<div className="compact">
							<Hamburger
								toggled={props.menu}
								onToggle={() => props.showMenu()}
							/>
						</div>
						{menuOptions.map((option) => (
							<a href={option.ref} target={option.target}>{option.name}</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
