import React, { Component } from 'react'
import { connect } from 'react-redux'
import LogIn from '../../components/LogIn'
import {
    changeLoggedStatus
} from '../../actions/Auth'
class LogInContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    
    render () {
        return (
            <div className="log-in-page">
               <LogIn {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.Auth.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeLoggedStatus: () => {
            dispatch(changeLoggedStatus())
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInContainer);