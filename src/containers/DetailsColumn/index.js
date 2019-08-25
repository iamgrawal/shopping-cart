import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailsColumn extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<main role="main" className="col-md-8 details-column">
				DetailsColumn
			</main>
		);
	}
}
