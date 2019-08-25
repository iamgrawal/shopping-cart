import React, { Component } from 'react';
import PropTypes from 'prop-types';
import itemsList from '../../utils/items-list';

export default class StoreItemsCategories extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<div className="col-md-4 store-items-container">
				<div className="container-fluid">
					<ul className="store-categories-container">
						{Object.keys(itemsList).map((item, index) => {
							return <li key={`categories-${index}`}>{item}</li>;
						})}
					</ul>
				</div>
			</div>
		);
	}
}
