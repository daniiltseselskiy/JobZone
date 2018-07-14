import { combineReducers } from 'redux'
import Auth from './Auth';
import homepage from './homepage';

const RootReducer = combineReducers({
    homepage,
    Auth
});

export default RootReducer;