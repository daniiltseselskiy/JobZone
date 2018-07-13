import React, { Component } from 'react'
import { connect } from 'react-redux'
import ForgotPassword from '../../components/ForgotPassword'
class ForgotPasswordContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    
    render () {
        return (
            <div className="forgot-password-page">
                <ForgotPassword />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPasswordContainer);