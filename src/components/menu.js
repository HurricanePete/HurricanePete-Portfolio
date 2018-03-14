import React from 'react';

import styled, {css, keyframes} from 'styled-components';
import {slideInRight} from 'react-animations';

import MenuItem from './menuItem';

const fadeAnimation = keyframes`${slideInRight}`

const MenuComponent = styled.div`
	animation: 0.5s ${fadeAnimation};
	background-color: lightgoldenrodyellow;
	transition: all 1s;
	color: #5a5a5a;
	z-index: 1;

	${props => props.display && css` 
		@media (max-width: 1020px) {
			display: none;
		}
	`}
	${props => !props.display && css` 
		@media (min-width: 1020px) {
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