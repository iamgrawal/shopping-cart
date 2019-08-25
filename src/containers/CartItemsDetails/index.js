import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from '../../components/cartItem';

class CartItemDetails extends Component {
	render() {
		const { quantity, price } = this.props;
		return (
			<div className="row cart-items-container">
				<ul>
					{Object.keys(quantity).map((item, index) => {
						return quantity[item] > 0 ? (
							<CartItem
								key={index}
								item={item}
								actualPrice={price[item]}
								totalPrice={price[item] * quantity[item]}
							/>
						) : null;
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	quantity: state.cart.quantity,
	price: state.cart.price
});

export default connect(mapStateToProps)(CartItemDetails);
