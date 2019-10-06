import React from 'react';
import Pil from './Pil';

class SearchBar extends React.Component {
	constructor() {
		super();
		this.searchInput = React.createRef();
	}
	handleSearch = e => {
		e.preventDefault();
		const searchTerm = this.searchInput.current.value;
		this.props.updateSearch(searchTerm);
		this.searchInput.current.value = '';
	};

	render() {
		return (
			<React.Fragment>
				<form className="search-bar-form" onSubmit={this.handleSearch}>
					<i className="search-icon fas fa-search"></i>
					<input
						className="search-bar"
						placeholder="Find a beer to drink..."
						type="text"
						ref={this.searchInput}
					/>
				</form>

				<div className="pil-bar">
					{this.props.searchTerm ? (
						<Pil searchTerm={this.props.searchTerm} updateSearch={this.props.updateSearch} />
					) : (
						''
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default SearchBar;
