import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
// console.log(store.getState());

// const render = () => {
// 	console.log(store.getState());
// }

// store.subscribe(render);

// document.addEventListener('click', () => {
// 	store.dispatch({ type: 'INC' })
// })

export default store;

