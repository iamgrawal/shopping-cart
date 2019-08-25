import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StoreHeader from '../../components/storeHeader';
import StoreItemsCategories from '../../components/storeItemsCategories';
import StoreItemsBrowser from '../../components/storeItemsBrowser';

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
						<div className="col-md-4">
							<StoreItemsCategories />
						</div>
						<div className="col-md-8">
							<StoreItemsBrowser />
						</div>
					</div>
				</div>
			</main>
		);
	}
}
