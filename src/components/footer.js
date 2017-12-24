import React from 'react';
import styled from 'styled-components';

import './styles/contact.css';

const StyledFooter = styled.footer.attrs({
	className: 'w-100 ph3 ph5-m ph6-l mid-gray tc'
})`
	border-top: 2px solid #003500;
`;

export default class FooterBar extends React.Component {
	render() {
		const github = 'https://github.com/HurricanePete';
		const linkedIn = 'https://www.linkedin.com/in/zachary-pete-78131a94/';
		return(
			<StyledFooter className="" id="contact">
				<header className="col-8 clear-float m-auto">
					<h3>Get In Touch</h3>
				</header>
				<ul className="col-8 clear-float m-auto">
					<li className="contact-email">zpete725@gmail.com</li>
					<li className="dib ma3"><a className="contact-link" href={linkedIn} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a></li>
					<li className="dib ma3"><a className="contact-link" href={github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-3x"></i></a></li>
				</ul>
			</StyledFooter>
		)
	}
}