import { ReactNode } from 'react';
import '../assets/styles/hamburger.scss';
/// <reference types="vite-plugin-svgr/client" />
import HomeIcon from '../assets/icons/home.svg?react';
import AboutIcon from '../assets/icons/account-circle.svg?react';
import PortfolioIcon from '../assets/icons/dots-grid.svg?react';
import ContactIcon from '../assets/icons/email.svg?react';

type PropType = {
	isMenuOpen: boolean;
};

type NavListItemProps = {
	icon?: ReactNode;
	href?: string;
	text?: string;
};

const NavListItem = ({ icon, href, text }: NavListItemProps) => {
	return (
		<li className='burger-nav-list-item'>
			<a href={href} className='burger-nav-item-link'>
				{icon}
				<span className='burger-nav-link-text'>{text}</span>
			</a>
		</li>
	);
};

const HamburgerMenu = ({ isMenuOpen }: PropType) => {
	return (
		<nav className={`burger-nav ${isMenuOpen ? 'animate-in' : 'animate-out'}`}>
			<ul className='burger-nav-list'>
				<NavListItem icon={<HomeIcon />} href='#' text='Home' />
				<NavListItem icon={<AboutIcon />} href='#about' text='About' />
				<NavListItem
					icon={<PortfolioIcon />}
					href='#portfolio'
					text='Portfolio'
				/>
				<NavListItem icon={<ContactIcon />} href='#contact' text='Contact' />
			</ul>
		</nav>
	);
};

export default HamburgerMenu;
