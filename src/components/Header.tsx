import { FormEventHandler, useState } from 'react';
import Nav from './Nav';

const Header = () => {
	const [text, setText] = useState('');

	const handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
	};
	return (
		<header className='header'>
			<div className='header-container'>
				<Nav />
				<form action='#' className='search-bar' onSubmit={handleSubmit}>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<button type='submit' aria-label='Search Text In Page'>
						Go
					</button>
				</form>
			</div>
		</header>
	);
};

export default Header;
