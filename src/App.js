
import React, { Component } from 'react';
import "./App.scss";
import Typed from "react-typed";
import NavBar from './Components/NavBar';

function App() {
	const skillStrings = [
		'Frontend Development',
		'Backend Development',
		'Biomedical Technologies',
		'Mobile Development',
		'Computer Vision'];
	return (
		<div className="App">
			<NavBar/>
			<div className="Intro">
				<p> Hey! 👋  Thanks for stopping by. My name’s Scott and I’m an undergraduate student at UBC who loves anything related to
					<br />
					<Typed
						strings={skillStrings}
						typeSpeed={50}
						backSpeed={50}
						loop
					/>
				</p>
			</div>
			{/* <Skills/> */}
		</div>
	);
}

export default App;