import '../public/assets/styles/main.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
function App() {
	return (
		<div className='container'>
			<Header />
			<main className='main'>
				<About />
				<Portfolio />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
