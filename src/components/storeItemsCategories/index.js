import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StoreItemsCategories extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<div className="col-md-3 store-items-container">
				<div className="container-fluid">
					<ul className="store-categories-container"></ul>
				</div>
			</div>
		);
	}
}
