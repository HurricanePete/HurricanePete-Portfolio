import React from 'react';

//imported animation component
import {Fade} from 'react-reveal';

import ProfilePic from './static-photos/ProfilePicEdit.JPG';

export default class Bio extends React.Component {
	render() {
		return(
			<section className="row">
				<header className="col-8 clear-float m-auto">
					<h2 className="tc">Hello, I’m Zak. I am a fullstack JavaScript web developer, React fan, and API lover.</h2>
				</header>
				<article className="col-8 clear-float tc m-auto">
					<div className="avatar-wrapper tc m-auto dib">
						<img className="avatar" src={ProfilePic} alt="Profile" />
					</div>
					<Fade bottom delay={500}>
						<p>I am a recent graduate of Thinkful’s Front End Web Development bootcamp. I enrolled at Thinkful while working as a fixed income credit analyst and quickly found that designing websites was much more fun. Now I'm addicted to the thrill of a successful debugging session or library integration.</p>
						<p>Away from my computer I am an avid runner, an aspiring cook, and a DIY project enthusiast. I de-stress by romping around outside, playing indie videogames, or watching any B-list movie I can get my hands on.</p>
					</Fade>
					 <span className="nav-spacing" id="projects"></span>
				</article>
			</section>
		)
	}}