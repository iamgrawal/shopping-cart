import React from 'react';
import Navbar from './containers/Navbar';
import CartColumn from './containers/CartColumn';
import DetailsColumn from './containers/DetailsColumn';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<div className="container-fluid">
				<div className="row">
					<nav className="col-md-4 bg-light sidebar">
						<CartColumn />
					</nav>
					<main role="main" className="col-md-7">
						<DetailsColumn />
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
