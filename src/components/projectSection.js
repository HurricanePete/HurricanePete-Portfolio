import React from 'react';

import ProjectsTile from'./projectsTile';

export default class ProjectSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [{
				title: 'Joystick Informer',
				description: 'Joystick Informer allows users to search for and buy console games using eBay or Amazon, as well as stay up to date with recent gaming news. After creating an account, users can also save their favorite games and see personalized recommendations based on their tastes.',
				technologies: ['Node', 'MongoDb', 'React', 'React-Redux'],
				link: 'https://barber-bertie-68258.netlify.com/',
				repo: ['https://github.com/HurricanePete/Joystick-Informer', 'https://github.com/HurricanePete/Joystick-Server']
			}, {
				title: 'Chef Pages',
				description: 'Chef Pages is an app to search and save your recipes in one convenient place. Add your own recipes, or search the web for inspiration. Find something you like? Chef Pages can add it to the database for you! Apply custom tags or a cookbook name in order to find it again later, or personalize the recipe with your own suggestions.',
				technologies: ['Node', 'MongoDb', 'jQuery'],
				link: 'https://sleepy-ravine-11904.herokuapp.com/',
				repo: 'https://github.com/HurricanePete/chef-pages'
			}, {
				title: 'NYC Public Parks Bathroom Guide',
				description: 'Have you ever wandered around an unfamiliar city looking for a bathroom? Can’t find a convenient Starbucks? The NYC Public Parks Bathroom Guide lists out the bathrooms provided by the New York City Parks department and will try and find them using a simple search to Google Maps.',
				technologies: ['jQuery'],
				link: 'https://hurricanepete.github.io/NYC-Public-Parks-Bathroom-Guide/',
				repo: 'https://github.com/HurricanePete/NYC-Public-Parks-Bathroom-Guide'
			}]
		}
	}

	render() {
		const {projects} = this.state;
		const tiles = projects.map((tile, index) => 
			<ProjectsTile key={index} {...tile} />
		); 

		return(
			<section className="row">
				<header className="col-9 clear-float m-auto">
					<h3>Projects</h3>
				</header>
				{tiles}
			</section>
		)
	}
}