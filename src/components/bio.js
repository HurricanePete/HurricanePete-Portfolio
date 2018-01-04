import React from 'react';

import ProfilePic from './static-photos/ProfilePicEdit.JPG';

import './styles/bio.css';

export default class Bio extends React.Component {
	render() {
		return(
			<section className="row hero">
				<header className="col-8 clear-float m-auto">
					<h1 className="tc">Hello, I’m Zak</h1>
					<h3 className="tc">I am a full stack JavaScript web developer.</h3>
				</header>
				<h2>About Me</h2>
				<article className="bio">
					<img className="avatar" src={ProfilePic} alt="Profile" />
					<div className="bio-summary" id="bio">
						<p>I started coding while working as a fixed-income credit analyst for a small financial tech company. It didn't take long for me to discover that I enjoyed building apps more than analyzing financial data or trolling the SEC website for documents.</p>
						<p>As a developer, I have built full stack applications using numerous JavaScript technologies, including React.js, Redux, Node.js, Mongoose, Passport, and jQuery. I also enjoy learning new CSS tricks to expand my arsenal and I'm addicted to the thrill of a successful debugging session or library integration.</p>
						<p>Away from my computer, I am an avid runner, an aspiring cook, and a DIY project enthusiast. I de-stress by romping around outside, playing indie video games, or watching any B-list movie I can get my hands on.</p>
					</div>
				</article>
			</section>
		)
	}}