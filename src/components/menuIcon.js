import React from 'react';
import styled from 'styled-components';

const StyleIcon = styled.span.attrs({
	className: 'ba bw1 br2 pointer'
})`
	display: none;
	z-index: 1;

	@media (max-width: 1020px) {
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