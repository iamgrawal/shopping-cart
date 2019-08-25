import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import StoreItem from '../storeItem';
import itemsList from '../../utils/items-list';

export default class StoreItemsDetails extends Component {
	// static propTypes = {
	// 	prop: PropTypes
	// };

	render() {
		return (
			<div className="col-md-8 store-items-container">
				<div className="container-fluid">
					<ul className="store-details-container">
						{Object.keys(itemsList).map((category, index) => {
							return itemsList[category].map((item, idx) => (
								<StoreItem key={`${index}-${idx}`} item={item} />
							));
						})}
					</ul>
				</div>
			</div>
		);
	}
}
