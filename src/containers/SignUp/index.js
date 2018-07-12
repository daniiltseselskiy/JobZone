import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignUpContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    
    render () {
        return (
            <div className="sign-up-page">
                This is SignUp page.
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
)(SignUpContainer);