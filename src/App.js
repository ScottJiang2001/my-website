
import React, { Component, useState } from 'react';
import "./App.scss";
import Typed from "react-typed";
import NavBar from './Components/NavBar';
import SideDrawer from './Components/SideDrawer';
import Backdrop from './Components/Backdrop';
import UsersLogos from './Components';
import { Skills } from './Components/Images/SkillsLogos';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';

function App() {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<div className="App">
			<NavBar showMenu={() => { setShowMenu(!showMenu); console.log(showMenu) }} />
			<SideDrawer show={showMenu}/>
			{showMenu &&
				<>
					<Backdrop showMenu = {() =>  setShowMenu(!showMenu)}/>
				</>
			}
			<Intro />
			<AboutMe />
		</div>
	);
}

export default App;