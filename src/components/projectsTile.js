import React from 'react';

import './styles/projectsTile.css';

export default class ProjectsTile extends React.Component {
	
	render() {
		const tile = this.props;
		let repoSection = <li className="dib tc"><a className="" href={tile.repo} target="_blank"><div className="link-button w4">Repo</div></a></li>;
		if(Array.isArray(tile.repo)) {
			repoSection = tile.repo.map((item, index) => 
				<li className="dib tc" key={index}><a className="" href={item} target="_blank"><div className="link-button">{index === 0 ? 'Front-end ' : 'Back-end '}Repo</div></a></li>
			);
		};
		const technologies = tile.technologies.map((tech, index) => 
			<li className="dib tc fw6 mh3" key={index}>{tech}</li>
		);
		return(
			<article className="project-tile col-8 clear-float m-auto">
				<div className="img-wrapper tc m-auto">
					<img src={tile.image} alt={tile.title} />
				</div>
				<p className="article-align ma0">{tile.description}</p>
				<ul className="tc m-auto">
					{technologies}
				</ul>
				<ul className="tech tc m-auto">
					<li className="dib tc"><a className="" href={tile.link} target="_blank"><div className="link-button tc w4">Live</div></a></li>
					{repoSection}
				</ul>
			</article>
		)
	}
}