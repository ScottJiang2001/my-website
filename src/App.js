import React, { Component, useState } from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
import SideDrawer from "./Components/SideDrawer";
import Backdrop from "./Components/Backdrop";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="App">
			<NavBar showMenu={() => setShowMenu(!showMenu)} menu={showMenu} />
			<SideDrawer show={showMenu} showMenu={() => setShowMenu(!showMenu)}/>
			{showMenu && (
				<>
					<Backdrop showMenu={() => setShowMenu(!showMenu)} />
				</>
			)}
			<Intro />
			<AboutMe />
			<Experience/>
			<Projects />
			<Contact />
			<footer>
				Designed & Coded by Scott Jiang ❤️
			</footer>
		</div>
	);
}

export default App;
