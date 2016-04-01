import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
		switch(action.type) {
			case FETCH_WEATHER:
			return state.concat([action.payload.data]); // we are creating a new state array with this line.
			// another alternative-> return [ action.payload.data, ...state];
			//DONT EVER MANIPULATE THE STATE in your code
			//the code to your right is bad practice: state.push(action.payload.data)
		}
	return state;
}