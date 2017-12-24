import React from 'react';

import './styles/contact.css';

export default function ContactInfo(props) {
	const github = 'https://github.com/HurricanePete';
	const linkedIn = 'https://www.linkedin.com/in/zachary-pete-78131a94/';
	return(
		<section className="row contact" id="contact">
			<header className="col-8 clear-float m-auto">
				<h3>Get In Touch</h3>
			</header>
			<ul className="col-8 clear-float m-auto">
				<li>zpete725@gmail.com</li>
				<li className="dib"><a className="contact-link" href={linkedIn} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a></li>
				<li className="dib"><a className="contact-link" href={github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-3x"></i></a></li>
			</ul>
		</section>
	)
}