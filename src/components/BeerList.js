import React from 'react';

class BeerList extends React.Component {
	render() {
		return <div className="beer-list">{this.props.children}</div>;
	}
}

export default BeerList;
