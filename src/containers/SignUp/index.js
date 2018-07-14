import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from '../../components/SignUp';

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
        signUpStep: state.Auth.signUpStep
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer);