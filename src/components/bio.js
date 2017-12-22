import React from 'react';

export default function Bio(props) {
	return(
		<section className="row">
			<header className="col-9 clear-float m-auto">
				<h1 className="tc">This is my Hero</h1>
			</header>
			<article className="col-9 clear-float m-auto">
				<h2>Hello, I’m Zak. I am a fullstack JavaScript web developer, React fan, and API lover.</h2>
				<p>I am a recent graduate of Thinkful’s Front End Web Development bootcamp. I started coding so that I could be imaginative and see my designs take shape. I kept coding because I became addicted to the thrill of functional code, especially after strenuous debugging.</p> 
				<p>Away from my computer I am an avid runner, an aspiring cook, and DIY project enthusiast. I de-stress by romping around outside, playing indie videogames, or watching any B-list movie I can get my hands on.</p>
			</article>
		</section>
	)
}