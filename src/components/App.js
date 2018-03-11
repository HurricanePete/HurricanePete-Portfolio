import React from 'react';

import NavBar from './nav';
import Intro from './intro';
import ProjectSection from './projectSection';
import Bio from './bio';
import FooterBar from './footer';

import './styles/App.css';
import './styles/response-grid.css';

export default class App extends React.Component {
	render() {
	    return (
	    	<div className="parallax-wrapper">
		    	<NavBar />
		    	<main>
			        <Intro />
			        <ProjectSection />
			        <Bio />
		      	</main>
		      	<FooterBar />
			</div>
	    );
	}
}