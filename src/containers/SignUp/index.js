import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from '../../components/SignUp';
import {
    changeSignUpStep,
    signUp,
    sendVerification,
    userVerification,
} from '../../actions/Auth'
class SignUpContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    
    render () {
        return (
            <div className="sign-up-page">
                <SignUp {...this.props} />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        signUpStep: state.Auth.signUpStep,
        userId: state.Auth.userId,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSignUpStep: signUpStep => {
            dispatch(changeSignUpStep(signUpStep))
        },
        signUp: user => {
            dispatch(signUp(user))
        },
        sendVerification: () => {
            dispatch(sendVerification())
        },
        userVerification: verificationCode => {
            dispatch(userVerification(verificationCode))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer);