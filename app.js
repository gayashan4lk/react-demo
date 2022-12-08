const app = document.getElementById('app');

function Header() {
	return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function Footer() {
	return <h3>Built by Gayashan with ❤️ </h3>;
}

function HomePage() {
	return (
		<>
			<Header />
			<p>Welcome to ReactJs.</p>
			<Footer />
		</>
	);
}

ReactDOM.render(<HomePage />, app);
