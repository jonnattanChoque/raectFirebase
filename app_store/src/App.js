import React, {useState} from 'react';
import styled from 'styled-components';
import { NavLink, Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404';
import Home from './components/Home';
import Blog from './components/Blog';
import ShopCar from './components/shopCar';
import Store from './components/Store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducer/ShopReducer"

const App = () => {
	const store = createStore(reducer);

	// const addCar = (product) => {
	// 	const exist = car.find((x) => x.id === product.id);
	// 	if (exist) {
	// 		setCar(
	// 			car.map((x) =>
	// 				x.id === product.id ? { ...exist, stock: exist.stock + 1 } : x
	// 			)
	// 		);
	// 	} else {
	// 		setCar([...car, { ...product, stock: 1 }]);
	// 	}
	// };

	return (
		<Provider store={store}>
			<Contenedor>
				<Menu>
					<NavLink to="/">Inicio</NavLink>
					<NavLink to="/blog">Blog</NavLink>
					<NavLink to="/store">Tienda</NavLink>
				</Menu>
				<main>
					<Routes>
						<Route path="*" element={<Error404 />} />
						<Route path="/" element={<Home />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/store" element={<Store />} />
					</Routes>
				</main>
				<aside> 
					<ShopCar />
				</aside>
			</Contenedor>
		</Provider>
	)
}

export default App

const Contenedor = styled.div`
		max-width: 1000px;
		padding: 40px;
		width: 90%;
		display: grid;
		gap: 20px;
		grid-template-columns: 2fr 1fr;
		background: #fff;
		margin: 40px 0;
		border-radius: 10px;
		box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
		width: 100%;
		text-align: center;
		background: #092c4c;
		grid-column: span 2;
		border-radius: 3px;
 
		a {
				color: #fff;
				display: inline-block;
				padding: 15px 20px;
		}
 
		a:hover {
				background: #1d85e8;
				text-decoration: none;
		}
`;