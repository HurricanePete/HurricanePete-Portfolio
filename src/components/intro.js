import React from 'react';

import './styles/intro.css';

export default function Intro(props) {
	return(
		<header className="intro">
			<h3 className="w-100">Hello, I'm Zak Pete  -  I am a full stack web developer</h3>
			<h2 className="intro">I build client facing apps and RESTful APIs using a <span className="highlight">MERN stack</span> as well as modern libraries like <span className="highlight">Redux, Passport, and Styled-Components</span>. I use <span className="highlight">Mocha</span> and <span className="highlight">Jest</span> for testing, and <span className="highlight">TravisCI, Heroku, and Netlify</span> for continous integration and automatic deployments.</h2>
		</header>
	)
}