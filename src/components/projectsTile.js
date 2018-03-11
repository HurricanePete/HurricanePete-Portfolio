import React from 'react';

//import animation component
import {Fade} from 'react-reveal';

import './styles/projectsTile.css';

export default class ProjectsTile extends React.Component {
	
	render() {
		const tile = this.props;
		let repoSection = 
			(<li className="dib tc">
				<a className="" href={tile.repo} target="_blank">
					<div className="link-button">Repo</div>
				</a>
			</li>);
//adds multiple repo links if there is front and back-end
 		if(Array.isArray(tile.repo)) {
			repoSection = tile.repo.map((item, index) => 
				<li className="dib tc" key={index}>
					<a className="" href={item} target="_blank">
						<div className="link-button">{index === 0 ? 'Front-end ' : 'Back-end '}Repo</div>
					</a>
				</li>
			);
		};
		const technologies = tile.technologies.map((tech, index) => 
			<li className="tech-item dib tc" key={index}>{tech}</li>
		);
		// <Fade bottom big fraction={0.01} duration={700}>
		// </Fade>
		const imageElement = (
			<div className="img-wrapper tc m-auto">
				<a href={tile.link} target="_blank">
					<img src={tile.image} alt={tile.title} />
				</a>
			</div>
		);
		return(
				<article className="project-tile clear-float m-auto">
					{tile.align === 'right' ? imageElement : null}
					<div className="tile-head">
						<h2>{tile.title}</h2>
						<ul className="tech tl m-auto" id="tech">
							{technologies}
						</ul>
					<p className="article-align ma0">{tile.description}</p>
					<ul className="links tc">
						<li className="dib tc">
							<a className="" href={tile.link} target="_blank">
								<div className="link-button tc">Live</div>
							</a>
						</li>
						{repoSection}
					</ul>
					</div>
					{tile.align === 'left' ? imageElement : null}
				</article>
			
		)
	}
}