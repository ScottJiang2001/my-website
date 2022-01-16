import logo from "./logo.svg";
import "./App.scss";
import React, { Component } from 'react';

function App() {
	return (
		<div className="App">
			<div className="Navigation">
				<a className="home"> scott jiang </a>
				<div className="Options">
					<ul>
						<li>
							<a> Experience </a>
						</li>
						<li>
							<a> Projects </a>
						</li>
						<li>
							<a> Contact </a>
						</li>
						<li>
							<a> Resume </a>
						</li>
					</ul>
				</div>
			</div>
			<div className = "Intro">
				<p> Hey! 👋  Thanks for stopping by. My name’s Scott and I’m an electrical and computer engineering student at UBC who loves
Software Development</p>
			</div>
		</div>
	);
}

export default App;