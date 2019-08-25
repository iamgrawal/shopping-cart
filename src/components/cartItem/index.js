import React, { Component } from 'react';
import PropTypes from 'prop-types';

import imagePlaceholder from '../../assets/images/imagePlaceholder.png';
import ItemActions from '../../containers/ItemActions';

export default class CartItem extends Component {
	static propTypes = {
		item: PropTypes.string,
		price: PropTypes.number
	};

	render() {
		const { item, actualPrice, totalPrice } = this.props;
		return (
			<li>
				<div className="cart-item-container media">
					<img src={imagePlaceholder} alt="imagePlaceholder" />
					<div className="cart-item media-body">
						<span className="cart-item-name">{item}</span>
						<br />
						<span className="cart-price">₹{totalPrice}</span>
						<br />
						<ItemActions item={{ itemName: item, price: actualPrice }} />
					</div>
				</div>
			</li>
		);
	}
}
