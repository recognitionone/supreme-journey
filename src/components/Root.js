import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import TodoApp from "./TodoApp";
// import { Router } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';




const Root = ({ store }) => (
		<Provider store={store}>
			<BrowserRouter>
				<Route path='/:filter?' component={ TodoApp }/>
			</BrowserRouter>
		</Provider>
	)

Root.propTypes = {
	store: PropTypes.object.isRequired,
};

export default Root;