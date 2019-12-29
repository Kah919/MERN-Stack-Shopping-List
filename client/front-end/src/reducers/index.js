import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combinerReducers({
    item: itemReducer
})