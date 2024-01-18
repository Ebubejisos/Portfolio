/// <reference types="vite-plugin-svgr/client" />
import HomeIcon from '../assets/icons/home.svg?react';
import AboutIcon from '../assets/icons/account-circle.svg?react';
import PortfolioIcon from '../assets/icons/dots-grid.svg?react';
import ContactIcon from '../assets/icons/email.svg?react';
const Nav = () => {
	return (
		<nav className='nav-bar'>
			<ul className='nav-list'>
				<li>
					<a href='#'>
						<HomeIcon />
						<span>Home</span>
					</a>
				</li>
				<li>
					<a href='#about'>
						<AboutIcon />
						<span>About</span>
					</a>
				</li>
				<li>
					<a href='#portfolio'>
						<PortfolioIcon />
						<span>Portfolio</span>
					</a>
				</li>
				<li>
					<a href='#contact'>
						<ContactIcon />
						<span>Contact</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
