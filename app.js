const app = document.getElementById('app');

function Header() {
	return <h1>Develop. Preview. Ship. 🚀</h1>;
}

function Article() {
	return (
		<div id='first-article'>
			<h2 className='title'>What is Lorem Ipsum</h2>
			<p className='content'>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged.
			</p>
		</div>
	);
}

function Footer() {
	return <h5>Built by Gayashan with ❤️ </h5>;
}

function HomePage() {
	return (
		<>
			<Header />
			<Article />
			<Footer />
		</>
	);
}

ReactDOM.render(<HomePage />, app);
