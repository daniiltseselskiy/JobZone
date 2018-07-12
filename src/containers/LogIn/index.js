import React, { Component } from 'react'
import { connect } from 'react-redux'

class LogInContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    
    render () {
        return (
            <div className="log-in-page">
                This is Login page.
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
)(LogInContainer);