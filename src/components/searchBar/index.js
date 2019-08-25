import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<form className="form-inline mr-auto">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
				/>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		);
	}
}
