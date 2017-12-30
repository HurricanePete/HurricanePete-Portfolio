import React from 'react';

//imported animation component
import {Fade} from 'react-reveal';

import ProfilePic from './static-photos/ProfilePicEdit.JPG';

import './styles/bio.css';

export default class Bio extends React.Component {
	render() {
		return(
			<section className="row">
				<header className="col-8 clear-float m-auto">
					<h2 className="tc"><span className="db">Hello, I’m Zak.</span> I am a fullstack JavaScript web developer, React fan, and API lover.</h2>
				</header>
				<article className="bio">
						<img className="avatar" src={ProfilePic} alt="Profile" />
					<div className="bio-summary">
						<p>As a developer, I have experience using React.js, Redux, Node.js, and jQuery. I also enjoy learning new CSS tricks and I'm addicted to the thrill of a successful debugging session or library integration.</p>
						<p>Away from my computer I am an avid runner, an aspiring cook, and a DIY project enthusiast. I de-stress by romping around outside, playing indie videogames, or watching any B-list movie I can get my hands on.</p>
					</div>
				</article>
			</section>
		)
	}}