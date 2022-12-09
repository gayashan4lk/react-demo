const app = document.getElementById('app');

function Header({ title }) {
	return <h1>{title ? `Let's ${title}` : 'Welcome to React Land.'}</h1>;
}

function Article({ article }) {
	return (
		<div id={article.id}>
			<h2 className='title'>{article.title}</h2>
			<p className='content'>{article.content}</p>
		</div>
	);
}

function Articles({ articles }) {
	return (
		<div className='article-container'>
			<ul>
				{articles.map((article) => (
					<li key={article.id}>
						<Article article={article} />
					</li>
				))}
			</ul>
		</div>
	);
}

function Footer() {
	return <h5>Built by Gayashan with ❤️ </h5>;
}

const articles = [
	{
		id: 1,
		title: 'first article',
		content:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
	},
	{
		id: 2,
		title: 'second article',
		content:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
	},
	{
		id: 3,
		title: 'third article',
		content:
			'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
	},
];

function HomePage() {
	const [likes, setLikes] = React.useState(0);

	function handleClick() {
		setLikes(likes + 1);
	}

	function handleResetLikes() {
		setLikes(0);
	}

	return (
		<>
			<Header title='Develop. Preview. Ship. 🚀' />
			<Header />
			{/* <Article data={articles[0]} /> */}
			<Articles articles={articles} />
			<button onClick={handleClick}>Like {likes}</button>
			<button onClick={handleResetLikes}>Reset</button>
			<Footer />
		</>
	);
}

ReactDOM.render(<HomePage />, app);
