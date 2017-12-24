import React from 'react';

import NavBar from './nav';
import Bio from './bio';
import ProjectSection from './projectSection';
import FooterBar from './footer';

import './styles/App.css';
import './styles/response-grid.css';

export default class App extends React.Component {
  render() {
    return (
    	<div>
	    	<NavBar />
	    	<main className="ph3">
		        <Bio />
		        <ProjectSection />
	      	</main>
	      	<FooterBar />
		</div>
    );
  }
}