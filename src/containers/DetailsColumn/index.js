import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StoreHeader from '../../components/storeHeader';
import StoreItemsCategories from '../../components/storeItemsCategories';
import StoreItemsDetails from '../../components/storeItemsDetails';

export default class DetailsColumn extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<main role="main" className="col-md-8 container-fluid details-column">
				<div className="container-fluid">
					<StoreHeader />
					<div className="row">
						<StoreItemsCategories />
						<StoreItemsDetails />
					</div>
				</div>
			</main>
		);
	}
}
