import { FormEventHandler, useState, useEffect } from 'react';

import Nav from './Nav';
import HamburgerMenu from './HamburgerMenu';

/// <reference types="vite-plugin-svgr/client" />
import MenuIcon from '../assets/icons/menu.svg?react';
import CloseMenuIcon from '../assets/icons/close.svg?react';

const Header = () => {
	// useState
	const [text, setText] = useState<string>('');
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleScroll = () => {
		const scrollY = window.scrollY || document.documentElement.scrollTop;

		if (scrollY > 50) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<header className='header'>
				<div
					className={`header-container ${isScrolled ? 'scroll-animation' : ''}`}
				>
					<Nav />
					{isMenuOpen && <HamburgerMenu isMenuOpen={isMenuOpen} />}
					{/* Mobile Hamburger Menu */}
					<button
						className={`hamburger-btn ${isScrolled ? 'black' : 'white'}`}
						onClick={() => setIsMenuOpen((prevState) => !prevState)}
					>
						{isMenuOpen ? <CloseMenuIcon /> : <MenuIcon />}
					</button>

					{/* Search form */}
					<form action='#' className='search-bar' onSubmit={handleSubmit}>
						<input
							type='text'
							value={text}
							onChange={(e) => setText(e.target.value)}
							placeholder='find in page...'
						/>
						<button type='submit' aria-label='find In Page'>
							Go
						</button>
					</form>
				</div>
			</header>
		</>
	);
};

export default Header;
