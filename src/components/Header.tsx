import { FormEventHandler, useState, useEffect } from 'react';

import Nav from './Nav';
import HamburgerMenu from './HamburgerMenu';

/// <reference types="vite-plugin-svgr/client" />
import MenuIcon from '../../assets/icons/menu.svg?react';
import CloseMenuIcon from '../../assets/icons/close.svg?react';
import heroImg from '../../assets/images/IMG_1642.jpg';

const Header = () => {
	// useState
	const [text, setText] = useState<string>('');
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleScroll = () => {
		const scrollY = window.scrollY || document.documentElement.scrollTop;

		if (scrollY > 450) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const handleSearch: FormEventHandler = (e) => {
		e.preventDefault();
		alert('feature coming soon...');
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
				<img src={heroImg} alt='Hero Image' className='header-backgroundImg' />
				<div
					className={`header-container ${isScrolled ? 'scroll-animation' : ''}`}
				>
					<Nav />
					{isMenuOpen && <HamburgerMenu isMenuOpen={isMenuOpen} />}
					{/* Mobile Hamburger Menu */}
					<button
						className={`hamburger-btn ${isScrolled ? 'white' : 'white'}`}
						onClick={() => setIsMenuOpen((prevState) => !prevState)}
					>
						{isMenuOpen ? <CloseMenuIcon /> : <MenuIcon />}
					</button>

					{/* Search form */}
					<form action='#' className='search-bar' onSubmit={handleSearch}>
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
				{/* HERO-SECTION */}
				<section className='hero'>
					<h1>I help businesses build fast, modern web applications</h1>

					<p>
						I design and develop responsive websites and web apps that are
						clean, efficient, and built to solve real problems.
					</p>

					<p>
						Whether you need a new website, a feature upgrade, or a custom tool,
						I can help bring your idea to life.
					</p>

					<div className='hero-cta'>
						<a href='#contact' className='btn-secondary'>
							Get In Touch
						</a>
					</div>
				</section>
			</header>
		</>
	);
};

export default Header;
