import { projects } from '../utils/projects';
import '../../assets/styles/portfolio.scss';
import { useEffect, useState } from 'react';

import { openLinksInNewTab } from '../utils/functions';
import useModal from '../utils/useModal';

const Portfolio = () => {
	const { dialogRef, openModal, closeModal } = useModal();
	const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to first project or null

	useEffect(() => {
		openLinksInNewTab('.portfolio-section');
	}, []);

	const handleOpenModal = (project: (typeof projects)[0]) => {
		setSelectedProject(project);
		openModal();
	};

	return (
		<section id='portfolio' className='portfolio-section'>
			<h1>My Projects</h1>
			<div className='projects-container'>
				{projects.map((project) => (
					<div className='project' key={project.id}>
						<div className='project-details'>
							<header>
								<h3>{project.name}</h3>
								<button
									className='open-modal'
									onClick={() => handleOpenModal(project)}
								>
									i
								</button>
							</header>

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
						<div
							className='img-container'
							onClick={() => handleOpenModal(project)}
						>
							<div className='img-frame'>
								<img src={project.imgSrc} alt={project.name} loading='lazy' />
							</div>
						</div>
					</div>
				))}
			</div>
			{/* MODAL */}
			<dialog ref={dialogRef} className='modal'>
				{/* create a list for project features and techstack here */}
				<h4>Key Features:</h4>
				<ul>
					{selectedProject.features?.map((feature, index) => (
						<li key={index}>{feature}</li>
					))}
				</ul>
				<h4>Tech Stack:</h4>
				<ul>
					{selectedProject.techStack?.map((tech, index) => (
						<li key={index}>{tech}</li>
					))}
				</ul>
				<video
					className='project-video'
					src={selectedProject.videoSrc}
					autoPlay
					muted
				></video>
				<button className='close-modal' onClick={closeModal}>
					Close
				</button>
			</dialog>
		</section>
	);
};

export default Portfolio;
