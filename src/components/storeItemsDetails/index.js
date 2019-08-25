import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StoreItemsDetails extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<div className="col-md-8 store-items-container">
				<div className="container-fluid">
					<ul className="store-details-container"></ul>
				</div>
			</div>
		);
	}
}
