import React from 'react';

import MenuIcon from './menuIcon';
import Menu from './menu';

import './styles/nav.css';

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuToggle: false
		}
	}

	menuClick() {
		this.setState({menuToggle: !this.state.menuToggle})
	}

	render() {
		const show = this.state.menuToggle;
		const github = 'https://github.com/HurricanePete';
		return(
			<nav className="w-100">
				<div className="nav-bar">
					<a href={github} target="_blank" rel="noopener noreferrer">
						<span className="nav-profile dib pointer">Zak Pete</span>
					</a>
					<MenuIcon onClick={() => this.menuClick()} />
					<Menu display={'true'} />
				</div>
				{show ? <Menu /> : null}
			</nav>
		)
	}
}