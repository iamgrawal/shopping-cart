import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../components/searchBar';
import ProfileActions from '../../components/profileActions';

export default class Navbar extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark">
				<div className="container">
					<a className="navbar-brand" href="/">
						Navbar
					</a>
					<SearchBar />
					{/* <ProfileActions /> */}
				</div>
			</nav>
		);
	}
}
