import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemActions extends Component {
	static propTypes = {
		item: PropTypes.object
	};

	getQuantity = itemName => {};

	render() {
		return (
			<div className="item-actions">
				<button>+</button>
				<input value={0} />
				<button>-</button>
			</div>
		);
	}
}
