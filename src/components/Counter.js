import React  from 'react';
import { connect } from 'react-redux';


function Counter ({ count, increment, decrement }) {
		return(
			<div>
				<br />
			Hello Counter {count}
				<div>
					<button onClick={increment}> plus </button>
					<button onClick={decrement}> minus </button>
				</div>
			</div>
			)
	}


// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// inc: () => dispatch({ 'INC' }),
// 		// dec: () => dispatch({ 'DEC' })
// 	}
// }

const increment = () => ({ type: "INC" });
const decrement = () => ({ type: "DEC" });

// const mapDispatchToProps = dispatch => ({
//   decrement: () => dispatch(decrement()),
//   increment: () => dispatch(increment()),
// });

const mapDispatchToProps = {
  decrement,
  increment,
};


const mapStateToProps = (state) => {
	const count = state.counter;
	return { count }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)