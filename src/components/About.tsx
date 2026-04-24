import { codingSkills } from '../utils/skills';
/// <reference types="vite-plugin-svgr/client" />
import profileImage from '../../assets//images/IMG-20220829-WA0059.jpg';
import AccountIcon from '../../assets/icons/account-25.svg?react';
import '../../assets/styles/about.scss';

const About = () => {
	return (
		<>
			<section className='about-section' id='about'>
				<h1>About</h1>
				<div className='about-container'>
					<div className='carousel'>
						<figure>
							<figcaption className='figcaption'>
								<div className='fig-name'>
									<AccountIcon />
									<h3>Gideon Anosike</h3>
								</div>
								<p>Web Developer | Building Modern Web Applications</p>
							</figcaption>
							<img
								className='about-img'
								src={profileImage}
								alt='profile picture'
								loading='lazy'
							/>
						</figure>
						<p className='about-me'>
							I’m a web developer who helps businesses build fast, modern, and
							user-friendly web applications. My focus is on creating solutions
							that are not just visually clean, but also practical and efficient
							to use. With a background in pharmacy, I naturally approach
							development with attention to detail and structure—building
							systems that handle data clearly and reliably. I’ve worked on
							projects including an inventory management system and interactive
							web applications, and I’m currently deepening my full-stack skills
							to build more scalable solutions. If you’re looking to build a
							website, improve an existing product, or add new features, I’m
							available for freelance work and open to collaborating on
							impactful projects.
							<p className='cta'>Let’s build something impactful.</p>
						</p>
					</div>
					<div className='core-skills'>
						<h3>Top Skills</h3>
						<ul className='skill-list'>
							{codingSkills.map((skill) => (
								<li key={skill.id}>
									<div className='skill-name'>
										<img src={skill.logoSrc} alt={skill.name} />
										<h4>{skill.name}:</h4>
									</div>
									<div className='progress-bar-container'>
										<div
											className='progress-bar'
											style={{ width: skill.level }}
										>
											<p>{skill.level}</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
