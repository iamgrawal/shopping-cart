import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import storeBanner from '../../assets/images/store-banner.jpg';

export default class StoreHeader extends Component {
	// static propTypes = {
	// 	prop: PropTypes
	// };

	render() {
		return (
			<div className="row" style={{ margin: '1rem 0' }}>
				<div className="col-md-3 offset-md-1 banner">
					<img src={storeBanner} alt="Store-Banner" />
				</div>
				<div className="col-md-5 header">
					<h1>Am Pm Convenient Store</h1>
					<p>Tatvam Villas, Sector 72</p>
				</div>
			</div>
		);
	}
}
