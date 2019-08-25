import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShoppingCart,
	faBell,
	faUser
} from '@fortawesome/free-solid-svg-icons';

export default class ProfileActions extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<ul className="navbar-nav">
				<li className="nav-item">
					<FontAwesomeIcon icon={faShoppingCart} />
				</li>
				<li className="nav-item">
					<FontAwesomeIcon icon={faBell} />
				</li>
				<li className="nav-item dropdown">
					<FontAwesomeIcon icon={faUser} />
				</li>
			</ul>
		);
	}
}
