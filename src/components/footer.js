import React from 'react';
import styled from 'styled-components';

import './styles/contact.css';

const StyledFooter = styled.footer.attrs({
	className: 'w-100 ph3 ph5-m tc ph6-ltc'
})`
	position: absolute;
	background-color: aliceblue;
	border-top: 2px solid #003500;
`;

export default class FooterBar extends React.Component {
	render() {
		const email = 'mailto:zpete725@gmail.com?Subject=Hello%20Zak';
		const github = 'https://github.com/HurricanePete';
		const linkedIn = 'https://www.linkedin.com/in/zachary-pete-78131a94/';
		return(
			<StyledFooter id="contact">
				<ul className="contact-list col-8 clear-float m-auto">
					<li className="dib ma3">
						<a className="contact-link" href={email} target="_blank" rel="noopener noreferrer">
							<i className="fas fa-envelope-square fa-3x"></i>
						</a>
					</li>
					<li className="dib ma3">
						<a className="contact-link" href={linkedIn} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-linkedin fa-3x"></i>
						</a>
					</li>
					<li className="dib ma3">
						<a className="contact-link" href={github} target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github-square fa-3x"></i>
						</a>
					</li>
				</ul>
			</StyledFooter>
		)
	}
}