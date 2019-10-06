import React from 'react';

class Pil extends React.Component {
	clearSearch = () => {
		this.props.updateSearch('');
	};
	render() {
		return (
			<div className="pil" onClick={this.clearSearch}>
				{this.props.searchTerm} <span className="x-remove">x</span>
			</div>
		);
	}
}

export default Pil;
