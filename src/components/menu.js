import React from 'react';

import styled, {css, keyframes} from 'styled-components';
import {fadeIn} from 'react-animations';

import MenuItem from './menuItem';

const fadeAnimation = keyframes`${fadeIn}`

const MenuComponent = styled.div`
	animation: 0.5s ${fadeAnimation};
	background-color: #003500;
	transition: background-color 1s;
	color: white;

	${props => props.display && css` 
		@media (max-width: 1000px) {
			display: none;
		}
	`}
	${props => !props.display && css` 
		@media (min-width: 1000px) {
			display: none;
		}
	`}
`;

export default class Menu extends React.Component {

	render() {
		return(
			<MenuComponent display={this.props.display}>
				<MenuItem />
			</MenuComponent>
		)
	}
}