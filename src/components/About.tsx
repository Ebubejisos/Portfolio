import { codingSkills } from '../utils/skills';

const About = () => {
	return (
		<section className='about-section' id='about'>
			<h1>About</h1>
			<div className='about-container'>
				<div className='carousel'>
					<figure>
						<figcaption className='figcaption'>
							<div className='fig-name'>
								<img src='/assets/icons/account-25.svg' alt='' />
								<h3>Gideon Anosike</h3>
							</div>
							<p>Web Developer and Affliate Pharmacist</p>
						</figcaption>
						<img src='assets/images/stones.jpg' alt='profile picture' />
					</figure>
					<p className='about-me'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
						cumque quos, voluptatibus nobis magnam at tempore, placeat
						reiciendis veniam ad, non atque eos aliquam accusamus?
					</p>
				</div>
				<div className='core-skills'>
					<h3>Top Skills</h3>
					<ul className='skill-list'>
						{codingSkills.map((skill) => (
							<li key={skill.id}>
								<div className='skill-name'>
									<img src={skill.logoSrc} alt='' />
									<h4>{skill.name}:</h4>
								</div>
								<div className='progress-bar-container'>
									<div className='progress-bar' style={{ width: skill.level }}>
										<p>{skill.level}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
