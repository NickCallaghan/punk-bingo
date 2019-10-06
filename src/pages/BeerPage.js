import React from 'react';
import BeerList from '../components/BeerList';
import Beer from '../components/Beer';
import SearchBar from '../components/SearchBar';

class BeerPage extends React.Component {
	render() {
		const beers = this.props.beers;
		return (
			<div>
				<SearchBar updateSearch={this.props.updateSearch} searchTerm={this.props.searchTerm} />
				<BeerList>
					{/* Return the beers */}
					{Object.keys(beers).map(key => {
						return <Beer beer={beers[key]} key={beers[key].id} />;
					})}
				</BeerList>
			</div>
		);
	}
}

export default BeerPage;
