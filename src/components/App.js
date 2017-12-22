import React from 'react';

import NavBar from './nav';
import Bio from './bio';
import ProjectSection from './projectSection';
import Contact from './contact';
import Footer from './footer';

import './styles/App.css';
import './styles/response-grid.css';

export default class App extends React.Component {
  render() {
    return (
    	<div>
	    	<NavBar />
	    	<main className="">
		        <Bio />
		        <ProjectSection />
		        <Contact />
	      	</main>
	      	<Footer />
		</div>
    );
  }
}