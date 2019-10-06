import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import BeerPage from '../pages/BeerPage';
import ScoreBoardPage from '../pages/ScoreBoardPage';
import TabBar from './TabBar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';

class App extends React.Component {
	state = {
		beers: [],
		searchTerm: undefined,
	};

	updateSearch = searchTerm => {
		this.setState({ searchTerm });
	};

	getBeers = () => {
		const beers = fetch('https://api.punkapi.com/v2/beers')
			.then(res => res.json())
			.then(data => this.setState({ beers: data }))
			.catch(e => console.error(e));
		this.setState({ beers });
	};

	componentDidMount() {
		this.getBeers();
	}

	render() {
		return (
			<BrowserRouter>
				<div className="app-wrapper">
					<header className="app-header">
						<h1>Punk Bingo</h1>
						<p className="subhead">The Brewdog Bingo Game</p>
					</header>

					<TabBar />

					<Redirect to="/beers" />
					<Route
						path="/beers"
						render={() => (
							<BeerPage
								beers={this.state.beers}
								updateSearch={this.updateSearch}
								searchTerm={this.state.searchTerm}
							/>
						)}
					/>
					<Route path="/scoreboard" component={ScoreBoardPage} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
