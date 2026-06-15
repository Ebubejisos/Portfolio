import '../assets/styles/main.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import Portfolio from './components/Portfolio';
import useImagePreloader from './hooks/useImagePreloader';
import bgImage from '../assets/images/IMG_1642.jpg';

// Add all background and key images that must load before render

const IMAGES_TO_PRELOAD = [
	bgImage,
	'../assets/images/stones.jpg',
	// ...add more as needed
];

function App() {
	const { isLoading, progress } = useImagePreloader(IMAGES_TO_PRELOAD);

	return (
		<div className='container'>
			{isLoading && <Loader progress={progress} />}
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
