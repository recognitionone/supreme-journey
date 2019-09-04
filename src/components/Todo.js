import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = () => (
  <li>
    hello todo
  </li>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo }
)(Todo);
