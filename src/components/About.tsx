const About = () => {
	interface Skill {
		name?: string;
		level?: string | number;
		id: number | string;
		logoSrc?: string;
	}

	const skills: Skill[] = [
		{
			name: 'Javascript',
			level: '90%',
			logoSrc: 'src/assets/icons/icons8-javascript.svg',
			id: 1,
		},
		{
			name: 'Cascading Style Sheets, CSS',
			level: '93%',
			logoSrc: 'src/assets/icons/icons8-css3.svg',
			id: 2,
		},
		{
			name: 'React',
			level: '89%',
			logoSrc: 'src/assets/icons/icons8-react-native.svg',
			id: 3,
		},
		{
			name: 'Typescript',
			level: '84%',
			logoSrc: 'src/assets/icons/icons8-typescript.svg',
			id: 4,
		},
		{
			name: 'NextJs',
			level: '76%',
			logoSrc: 'src/assets/icons/icons8-next.js.svg',
			id: 5,
		},
		{
			name: 'MongoDB',
			level: '72%',
			logoSrc: 'src/assets/icons/mongodb.svg',
			id: 6,
		},
	];

	return (
		<section className='about-section'>
			<h1>About</h1>
			<div className='carousel'>
				<figure>
					<figcaption className='figcaption'>
						<div className='fig-name'>
							<img src='src/assets/icons/account-25.svg' alt='' />
							<h3>Gideon Anosike</h3>
						</div>
						<p>Web Developer and Affliate Pharmacist</p>
					</figcaption>
					<img src='src/assets/images/stones.jpg' alt='' />
				</figure>
				<p className='about-me'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
					cumque quos, voluptatibus nobis magnam at tempore, placeat reiciendis
					veniam ad, non atque eos aliquam accusamus?
				</p>
			</div>
			<div className='core-skills'>
				<h3>Top Skills</h3>
				<ul className='skill-list'>
					{skills.map((skill) => (
						<li key={skill.id}>
							<div className='skill-name'>
								<img src={skill.logoSrc} alt='' />
								<h4>{skill.name}:</h4>
							</div>
							<div className='progress-bar-container'>
								<div
									className='progress-bar'
									style={{ width: skill.level }}
								></div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default About;
