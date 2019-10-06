import React from 'react';
import { NavLink } from 'react-router-dom';

class TabBar extends React.Component {
	render() {
		return (
			<nav className="main-nav">
				<NavLink className="nav-item" to="/beers">
					Beers
				</NavLink>
				<NavLink className="nav-item" to="/scoreboard">
					Scoreboard
				</NavLink>
			</nav>
		);
	}
}

export default TabBar;
