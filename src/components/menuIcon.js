import React from 'react';
import styled from 'styled-components';

const StyleIcon = styled.span.attrs({
	className: 'black ba bw1 b--black br2 pointer'
})`
	display: none;
	z-index: 1;

	@media (max-width: 1000px) {
		display: inline-block;
	}
`;

export default class MenuIcon extends React.Component {
	render() {
		return(
			<StyleIcon onClick={this.props.onClick}>
				<i className="fas fa-bars"></i>
			</StyleIcon>
		)
	}
}