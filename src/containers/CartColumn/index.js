import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartColumn extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<nav className="col-md-3 bg-light sidebar container-fluid cart-column">
				<div className="row">
					<p className="heading">Cart</p>
				</div>
				<div className="row cart-items-container"></div>
				<div className="checkout-actions row">
					<p className="subtotal">
						Subtotal: <span>₹ {0}</span>
					</p>
					<textarea className="instructions-box"></textarea>
					<button className="checkout">checkout</button>
				</div>
			</nav>
		);
	}
}
