import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemActions from '../../containers/ItemActions';
import imagePlaceholder from '../../assets/images/imagePlaceholder.png';
export default class StoreItem extends Component {
	static propTypes = {
		item: PropTypes.object
	};

	render() {
		const { item } = this.props;
		return (
			<li>
				<div className="store-item">
					<img src={imagePlaceholder} alt="imagePlaceholder" />
					<div className="item">
						<span className="item-name">{item.itemName}</span>
						<br />
						<span className="price">₹{item.price}</span>
						<br />
						<ItemActions item={item} />
					</div>
				</div>
			</li>
		);
	}
}
