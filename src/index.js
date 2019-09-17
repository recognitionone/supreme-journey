import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoApp from "./TodoApp";
import { Router, Route } from 'react-router';




const Root = ({ store }) => (
		<Provider store={store}>
	    <TodoApp />
	  </Provider>
	)

const rootElement = document.getElementById("root");


ReactDOM.render(
  <Root store={ store }/>,
  rootElement
);
