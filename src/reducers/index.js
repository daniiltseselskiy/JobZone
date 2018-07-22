import { combineReducers } from 'redux'
import Auth from './Auth';
import homepage from './homepage';
import profile from './Profile';
import Job from './Job';
import SideBar from './SideBar'
const RootReducer = combineReducers({
    Auth,
    homepage,
    profile,
    Job,
    SideBar,
});

export default RootReducer;