import React from 'react';

class Beer extends React.Component {
	render() {
		const { name, tagline, description, abv, first_brewed } = this.props.beer;
		return (
			<div className="beer-card">
				<h2 className="beer-name">{name}</h2>
				<h3 className="beer-tagline">{tagline}</h3>
				<p className="beer-desc">{description}</p>
				<div className="beer-footer">
					<p>
						<span className="footer-label">ABV: </span>
						<span className="footer-info">{abv}</span>
					</p>
					<p>
						<span className="footer-label">First Brewed: </span>
						<span className="footer-info">{first_brewed}</span>
					</p>
				</div>
			</div>
		);
	}
}

export default Beer;
