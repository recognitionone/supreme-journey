import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import Root from "./components/Root";

const rootElement = document.getElementById("root");


ReactDOM.render(
  <Root store={ store }/>,
  rootElement
);
