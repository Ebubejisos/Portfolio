import '../assets/styles/main.scss';

// COMPONENT IMPORT
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import Portfolio from './components/Portfolio';
import useImagePreloader from './hooks/useImagePreloader';

// IMAGE IMPORT
import bgImage from '../assets/images/IMG_1642.jpg';
import inventoryImg from '../assets/images/Drug-inventory.png';
import promptopiaImg from '../assets/images/Promptopia.png';
import cvImg from '../assets/images/CV-creator.png';
import kryptImg from '../assets/images/Krypt.png';

// Add all background and key images that must load before render

const IMAGES_TO_PRELOAD = [
	bgImage,
	'../assets/images/stones.jpg',
	inventoryImg,
	promptopiaImg,
	cvImg,
	kryptImg,
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
