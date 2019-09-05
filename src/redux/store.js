import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./../localStorage"
import throttle from 'lodash/throttle'


const persistedState = loadState()

const store = createStore(rootReducer, persistedState);


//throttle makes it update the state every 1s 
store.subscribe(throttle(() => {
	saveState({
		todos: store.getState().todos
	})
}, 1000));



export default store;
