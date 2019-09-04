import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
  	case 'ADD_TODO':
  		return [
  			...state,
  			{
  				id: action.id,
  				text: action.text,
  				completed: false
  			}
  		];
  	case 'TOGGLE_TODO':
  		return state.map(todo => {
  			if (todo.id !== action.id) {
  				return todo
  			} else {
  				return {
  					...todo,
  					completed: !todo.completed
  				}
  			}
  		});

    default:
      return state;
  }
}
