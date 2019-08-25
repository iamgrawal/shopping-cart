import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import CartItemsDetails from '../../containers/CartItemsDetails';
import ACTIONS from '../../redux/actions/cartActions';

class CartColumn extends Component {
	// static propTypes = {
	// 	prop: PropTypes
	// };

	getTotalPrice = () => {
		const { quantity, price } = this.props;
		let totalPrice = 0;
		Object.keys(quantity).forEach((item, idx) => {
			totalPrice += quantity[item] * price[item];
		});
		return totalPrice;
	};

	render() {
		return (
			<nav className="col-md-3 bg-light sidebar cart-column">
				<div className="container-fluid">
					<div className="row">
						<p className="heading">Cart</p>
					</div>
					<CartItemsDetails />
					<div className="checkout-actions row">
						<p className="subtotal">
							Subtotal: <span>₹ {this.getTotalPrice()}</span>
						</p>
						<textarea
							className="instructions-box"
							placeholder="Any additional instructions..."
							value={this.props.instructions}
							onChange={e => this.props.updateInstructions(e.target.value)}
						></textarea>
						<button className="checkout" onClick={this.props.clearCart}>
							checkout
						</button>
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	quantity: state.cart.quantity,
	price: state.cart.price,
	instructions: state.cart.instructions
});

const mapDispatchToProps = dispatch => ({
	clearCart: () => dispatch(ACTIONS.clearCart()),
	updateInstructions: text => dispatch(ACTIONS.updateInstructions(text))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartColumn);
