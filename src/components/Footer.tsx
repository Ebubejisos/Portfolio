import '../assets/styles/footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<div>
				<button className='top-btn'>
					<a href='#'>To the top</a>
				</button>
				<ul className='social-media-links'>
					<li>
						<a href=''>
							<img src='' alt='' />
						</a>
					</li>
					<li>
						<a href=''>
							<img src='' alt='' />
						</a>
					</li>
					<li>
						<a href=''>
							<img src='' alt='' />
						</a>
					</li>
					<li>
						<a href=''>
							<img src='' alt='' />
						</a>
					</li>
				</ul>
			</div>
			<ul className='reference-lists'>
				<li>
					<a target='_blank' href='https://icons8.com/icon/108784/javascript'>
						JavaScript and other
					</a>{' '}
					icons by{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
				</li>
				<li>
					<a href='https://iconscout.com/icons/mongodb' target='_blank'>
						Mongodb
					</a>{' '}
					by{' '}
					<a href='https://iconscout.com/contributors/icon-mafia'>Icon Mafia</a>{' '}
					on <a href='https://iconscout.com'>IconScout</a>
				</li>
			</ul>
			<div className='copyrights'>
				<p>Copyright &#169; Gideon Anosike</p>
				<img src='src/assets/icons/github.svg' alt='' />
			</div>
		</footer>
	);
};

export default Footer;
