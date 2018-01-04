import React from 'react';
import styled from 'styled-components';

const MenuListItem = styled.li.attrs({
	className: 'linkwhite mr4'
})`
	display: inline-block;
	margin: 0 1rem;

	@media (max-width: 1000px) {
		display: block;
		margin: 1rem 0;
	}
`;

export default class MenuItem extends React.Component {
	
	render() {
		return(
			<ul className="ma0" >
				<MenuListItem>
					<a href="#bio">Bio</a>
				</MenuListItem>
				<MenuListItem>
					<a href="#projects">Projects</a>
				</MenuListItem>
				<MenuListItem>
					<a href="#contact">Contact Me</a>
				</MenuListItem>
			</ul>
		)
	}
}