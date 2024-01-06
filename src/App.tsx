import './assets/styles/main.scss';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
	return (
		<div className='container'>
			<Header />
			<main className='main'>
				<About />
			</main>
			<Footer />
		</div>
	);
}

export default App;
