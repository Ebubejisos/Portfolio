import { projects } from '../utils/projects';
import '../assets/styles/portfolio.scss';
import { useEffect } from 'react';

import { openLinksInNewTab } from '../utils/functions';

const Portfolio = () => {
	useEffect(() => {
		openLinksInNewTab('.portfolio-section');
	}, []);
	return (
		<section id='portfolio' className='portfolio-section'>
			<h1>Portfolio</h1>
			<div className='projects-container'>
				{projects.map((project) => (
					<div className='project' key={project.id}>
						<div className='project-details'>
							<h3>{project.name}</h3>
							<p>{project.description}</p>
							<div className='link-btn-container'>
								<button className='repo-link'>
									<a href={project.repoLink}>github-repo</a>
								</button>
								<button className='live-link'>
									<a href={project.liveLink}>live app</a>
								</button>
							</div>
						</div>
						<div className='img-container'>
							<div className='img-frame'>
								<img src={project.imgSrc} alt={project.name} />
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
