import { useEffect, useState } from 'react';
import '../assets/styles/main.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import Portfolio from './components/Portfolio';

function App() {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		const handleLoad = () => {
			setIsLoading(false);
		};
		if (document.readyState === 'complete') {
			handleLoad();
		} else {
			window.addEventListener('load', handleLoad);
			return () => window.removeEventListener('load', handleLoad);
		}
	}, []);

	return (
		<div className='container'>
			{/* add a loader component that displays while images are loading */}

			{isLoading && <Loader />}
			{!isLoading && (
				<>
					<Header />
					<main className='main'>
						<Portfolio />
						<About />
						<Contact />
					</main>
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
