import { combineReducers } from 'redux'
import Auth from './Auth';
import homepage from './homepage';
import profile from './Profile';
import Job from './Job';

const RootReducer = combineReducers({
    Auth,
    homepage,
    profile,
    Job,
});

export default RootReducer;