import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../../components/Message' 

class MessageContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <div className="message-page">
                <Message />
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
)(MessageContainer);