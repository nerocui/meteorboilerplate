import { combineReducers } from "redux";
import AuthState from './reducer_auth';

const rootReducer = combineReducers({
	AuthState,
});

export default rootReducer;

