import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router';
import Headers from '../containers/Headers';
import Footers from '../containers/Footers';
import Homepage from '../containers/Homepage';
import ResetPassword from '../containers/ResetPassword';
import SignUp from '../containers/SignUp';
import LogIn from '../containers/LogIn';
import ForgotPassword from '../containers/ForgotPassword'
import Profile from '../containers/Profile'
import Job from '../containers/Job'
import CreateJob from '../containers/CreateJob'
import EditJob from '../containers/EditJob'
import Dashboard from '../containers/Dashboard'
import Message from '../containers/Message'
import Setting from '../containers/Setting'
class RouterComponent extends Component {
    render () {
        return (
            <div style={{ height: '100vh' }}>
                <Headers />
                <Switch>
                    <Route path="/resetpassword" component={ResetPassword} />
                    <Route path="/forgotpassword" component={ForgotPassword} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/log-in" component={LogIn} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/job" component={Job} />
                    <Route path="/create-job" component={CreateJob} />
                    <Route path="/edit-job" component={EditJob} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/message" component={Message} />
                    <Route path="/setting" component={Setting} />
                    <Route path="/" component={Homepage} />
                </Switch>
                <Footers />
            </div>
        )
    }
}

export default RouterComponent;
