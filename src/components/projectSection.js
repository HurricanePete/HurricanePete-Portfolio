import React from 'react';

import ProjectsTile from'./projectsTile';

import GliderHuntImage from './static-photos/GliderHuntScale.JPG';
import JoystickImage from './static-photos/JoystickInformerScale.JPG';
import ChefPagesImage from './static-photos/ChefPagesScale.JPG';
import NYCImage from './static-photos/NYCPPBGScale.JPG';

export default class ProjectSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [{
				title: 'GliderHunt',
				image: GliderHuntImage,
				description: 'In Progress --- Start hunting for the best paragliding equipment and instructors in your area.',
				technologies: ['Node', 'MongoDb', 'React', 'React-Redux', 'Redux-Thunk', 'Styled-Components'],
				link: 'http://www.gliderhunt.com',
				repo: ['https://github.com/HurricanePete/Glider-Hunt-Client', 'https://github.com/HurricanePete/Glider-Hunt'],
				align: 'left'
			},
			{
				title: 'Joystick Informer',
				image: JoystickImage,
				description: 'Joystick Informer is a simple app where users can search for and buy a wide range of video games. Compare prices across consoles, read summaries, and follow links directly to Amazon and eBay. After creating an account, users can also save their favorite games and see personalized recommendations based on their tastes.',
				technologies: ['Node', 'MongoDb', 'React', 'React-Redux'],
				link: 'https://barber-bertie-68258.netlify.com/',
				repo: ['https://github.com/HurricanePete/Joystick-Informer', 'https://github.com/HurricanePete/Joystick-Server'],
				align: 'right'
			}, {
				title: 'Chef Pages',
				image: ChefPagesImage,
				description: 'Chef Pages is an app to search and save your recipes in one convenient place. Users can add their own recipes, or search the web for inspiration. Find something you like? Chef Pages can add it to the database for you! Apply custom tags or a cookbook name in order to find it again later, or personalize the recipe with your own suggestions.',
				technologies: ['Node', 'MongoDb', 'jQuery'],
				link: 'https://sleepy-ravine-11904.herokuapp.com/',
				repo: 'https://github.com/HurricanePete/chef-pages',
				align: 'left'
			}, {
				title: 'NYC Public Parks Bathroom Guide',
				image: NYCImage,
				description: 'Have you ever wandered around an unfamiliar city looking for a bathroom? Can’t find a convenient Starbucks? The NYC Public Parks Bathroom Guide lists out the bathrooms provided by the New York City Parks department and will try to map them using Google.',
				technologies: ['jQuery'],
				link: 'https://hurricanepete.github.io/NYC-Public-Parks-Bathroom-Guide/',
				repo: 'https://github.com/HurricanePete/NYC-Public-Parks-Bathroom-Guide',
				align: 'right'
			}]
		}
	}

	render() {
		const {projects} = this.state;
		const tiles = projects.map((tile, index) => 
			<ProjectsTile key={index} {...tile} />
		); 
		return(
		<div className="project-row">
			<span className="nav-spacing" id="projects"></span>
			<section className="row">
				<header>
					<h2 className="project-head">Recent Work</h2>
				</header>
				{tiles}
			</section>
		</div>
		)
	}
}