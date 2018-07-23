import { combineReducers } from 'redux'
import Auth from './Auth';
// import Homepage from './Homepage';
import Profile from './Profile';
import Job from './Job';
import SideBar from './SideBar'
import Message from './Message'

const RootReducer = combineReducers({
    Auth,
    Profile,
    Job,
    SideBar,
    Message,
});

export default RootReducer;