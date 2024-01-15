import { FormEventHandler, useState, useEffect } from 'react';

import Nav from './Nav';

const Header = () => {
	const [text, setText] = useState('');

	const [isScrolled, setIsScrolled] = useState(false);

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
		<header className='header'>
			<div
				className={`header-container ${isScrolled ? 'scroll-animation' : ''}`}
			>
				<Nav />
				{/* Mobile Hamburger Menu */}

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
	);
};

export default Header;
