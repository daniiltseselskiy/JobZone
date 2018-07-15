import { combineReducers } from 'redux'
import Auth from './Auth';
import homepage from './homepage';
import profile from './Profile';

const RootReducer = combineReducers({
    Auth,
    homepage,
    profile
});

export default RootReducer;