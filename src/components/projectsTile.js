import React from 'react';

export default class ProjectsTile extends React.Component {
	
	render() {
		const tile = this.props;
		let repoSection = <a>{tile.repo}</a>;
		if(Array.isArray(tile.repo)) {
			const repositories = tile.repo.map((item, index) => 
				<li key={index}><a className="db">{item}</a></li>
			)
			repoSection = <ul>{repositories}</ul>
		}
		const technologies = tile.technologies.map((tech, index) => 
			<li key={index}>{tech}</li>
		)
		return(
			<article className="col-9">
				<h4>{tile.title}</h4>
				<p>{tile.description}</p>
				<ul>
					{technologies}
				</ul>
				<a className="db">{tile.link}</a>
				{repoSection}
			</article>
		)
	}
}