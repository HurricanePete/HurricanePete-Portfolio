import React from 'react';
import styled from 'styled-components';

const StyleIcon = styled.span.attrs({
	className: 'white ba bw1 b--white br2 pointer'
})`
	display: none;

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