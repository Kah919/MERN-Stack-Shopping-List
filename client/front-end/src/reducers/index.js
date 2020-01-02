import { combineReducers } from 'redux';
import itemReducer from './itemReducer'; // taking the switch function in itemReducer file

export default combineReducers({
    item: itemReducer
});