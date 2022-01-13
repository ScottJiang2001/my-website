import logo from "./logo.svg";
import "./App.scss";
import React, { Component }  from 'react';

function App() {
	return (
		<div className="App">
			<div className="Navigation">
				<a className="home"> scott jiang </a>
				<div className="Options">
					<a> Experience </a>
					<a> Projects </a>
					<a> Contact </a>
					<a> Resume </a>
				</div>
			</div>
		</div>
	);
}

export default App;