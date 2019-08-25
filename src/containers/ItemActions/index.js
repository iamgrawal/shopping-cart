import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ACTIONS from '../../redux/actions/cartActions';

class ItemActions extends Component {
	static propTypes = {
		item: PropTypes.object
	};

	constructor(props) {
		super(props);
		this.updateCart = this.updateCart.bind(this);
	}

	getQuantity = () => {
		const { item, quantity } = this.props;
		if (quantity && quantity[item.itemName]) return quantity[item.itemName];
		else return 0;
	};

	updateCart = (item, type) => {
		this.props.updateItem(item, type);
	};

	handleChange = event => {
		let value = Number(event.target.value);
		if (value === '') value = 0;
		if (value >= 0) this.props.updateItem(this.props.item, value);
	};

	render() {
		const { item } = this.props;
		return (
			<div className="item-actions">
				<button onClick={() => this.updateCart(item, '-1')}>-</button>
				<input value={this.getQuantity()} onChange={this.handleChange} />
				<button onClick={() => this.updateCart(item, '+1')}>+</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	quantity: state.cart.quantity
});

const mapDispatchToProps = dispatch => ({
	updateItem: (item, type) => dispatch(ACTIONS.updateItem(item, type))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemActions);
