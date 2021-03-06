import React from 'react';

import ProfilePic from './static-photos/ProfilePicEdit.JPG';

import './styles/bio.css';

export default class Bio extends React.Component {
	render() {
		return(
			<section className="row hero" id="bio">
				<h2 className="about-me">About Me</h2>
				<article className="bio">
					<div className="bio-summary">
						<p>I started coding while working as a fixed-income credit analyst for a small financial tech company. It didn't take long for me to discover that I enjoyed building apps more than analyzing financial data or trolling the SEC website for documents.</p>
						<p>Now, as a developer, I love taking on challenges and finding new libraries or APIs. I also enjoy learning new CSS tricks to expand my arsenal and I'm addicted to the thrill of a successful debugging session.</p>
						<p>I'd love to chat with you and can be reached by email at <span className="contact">zpete725@gmail.com</span>.</p>
					</div>
					<img className="avatar" src={ProfilePic} alt="Profile" />
				</article>
			</section>
		)
	}}