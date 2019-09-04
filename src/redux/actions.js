import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
});

export const setFilter = filter => ({ 
	type: SET_FILTER,
});
