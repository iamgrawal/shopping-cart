import React from 'react';
import Navbar from './containers/Navbar';
import CartColumn from './containers/CartColumn';
import DetailsColumn from './containers/DetailsColumn';

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<div className="container-fluid">
				<div className="row">
					<CartColumn />
					<DetailsColumn />
				</div>
			</div>
		</div>
	);
}

export default App;
