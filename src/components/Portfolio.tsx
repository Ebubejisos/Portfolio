import { projects } from '../utils/projects';
import '../../assets/styles/portfolio.scss';
import { useEffect } from 'react';

import { openLinksInNewTab } from '../utils/functions';

const Portfolio = () => {
	useEffect(() => {
		openLinksInNewTab('.portfolio-section');
	}, []);
	return (
		<section id='portfolio' className='portfolio-section'>
			<h1>My Projects</h1>
			<div className='projects-container'>
				{projects.map((project) => (
					<div className='project' key={project.id}>
						<div className='project-details'>
							<h3>{project.name}</h3>

							<p>{project.description}</p>
							<div className='link-btn-container'>
								<a href={project.repoLink} className='repo-link'>
									View code
								</a>
								<a href={project.liveLink} className='live-link'>
									live Demo
								</a>
							</div>
						</div>
						<div className='img-container'>
							<div className='img-frame'>
								<img src={project.imgSrc} alt={project.name} loading='lazy' />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
