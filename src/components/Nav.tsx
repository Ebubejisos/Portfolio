const Nav = () => {
	return (
		<nav className='nav-bar'>
			<ul className='nav-list'>
				<li>
					<a href='#'>
						<img src='./src/assets/icons/home.svg' alt='' />
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='./src/assets/icons/account-circle.svg' alt='' />
						<span>About</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='./src/assets/icons/dots-grid.svg' alt='' />
						<span>Portfolio</span>
					</a>
				</li>
				<li>
					<a href='#'>
						<img src='./src/assets/icons/email.svg' alt='' />
						<span>Contact</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
