import React from 'react';

//import animation component
import {Fade} from 'react-reveal';

import './styles/projectsTile.css';

export default class ProjectsTile extends React.Component {
	
	render() {
		const tile = this.props;
		let repoSection = <li className="dib tc"><a className="" href={tile.repo} target="_blank"><div className="link-button">Repo</div></a></li>;
		if(Array.isArray(tile.repo)) {
//adds multiple repo links if there is front and back-end 
			repoSection = tile.repo.map((item, index) => 
				<li className="dib tc" key={index}><a className="" href={item} target="_blank"><div className="link-button">{index === 0 ? 'Front-end ' : 'Back-end '}Repo</div></a></li>
			);
		};
		const technologies = tile.technologies.map((tech, index) => 
			<li className="tech-item dib tc" key={index}>{tech}</li>
		);
		return(
			<Fade bottom big fraction={0.01} duration={700}>
				<article className="project-tile col-9 clear-float m-auto">
					<div className="tile-head">
						<h2>{tile.title}</h2>
						<ul className="tech tl m-auto">
							{technologies}
						</ul>
					</div>
					<div className="img-wrapper tc m-auto">
						<a href={tile.link} target="_blank"><img src={tile.image} alt={tile.title} /></a>
					</div>
					<p className="article-align ma0">{tile.description}</p>
					<ul className="links tc">
						<li className="dib tc"><a className="" href={tile.link} target="_blank"><div className="link-button tc">Live</div></a></li>
						{repoSection}
					</ul>
				</article>
			</Fade>
		)
	}
}