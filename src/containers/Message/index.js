import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../../components/Message' 
import {
    changeMessagePanelStatus
} from '../../actions/message'
class MessageContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <div className="message-page">
                <Message  {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        messagePanelStatus: state.Message.messagePanelStatus
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeMessagePanelStatus: () => {
            dispatch(changeMessagePanelStatus());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageContainer);