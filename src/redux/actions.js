import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";
import { v4 } from 'uuid'


export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: v4(),
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ 
	type: SET_FILTER, 
	payload: { filter } 
});
