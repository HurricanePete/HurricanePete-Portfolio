import React from 'react';

import './styles/nav.css';

export default function NavBar(props) {
	return(
		<nav className="nav-bar bg-black-90 fixed col-12">
			<div className="nav-profile">Zak Pete</div>
			<ul className="nav-link">
				<li className="link dim white mr3"><a>Bio</a></li>
				<li className="link dim white mr3"><a>Projects</a></li>
				<li className="link dim white mr3"><a>Contact Me</a></li>
			</ul>
		</nav>
	)
}