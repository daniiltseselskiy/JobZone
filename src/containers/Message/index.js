import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../../components/Message' 
import {
    changeMessagePanelStatus,
    getConversations,
    getMessages,
    showMessageDetail,
    deleteMessage,
    updateMessage,
    sendMessage,
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
        messagePanelStatus: state.Message.messagePanelStatus,
        conversations: state.Message.conversations,
        messages: state.Message.messages,
        jobList: state.Job.jobList,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeMessagePanelStatus: () => {
            dispatch(changeMessagePanelStatus());
        },
        getConversations: () => {
            dispatch(getConversations())
        },
        getMessages: () => {
            dispatch(getMessages())
        },
        showMessageDetail: () => {
            dispatch(showMessageDetail())
        },
        sendMessage: () => {
            dispatch(sendMessage())
        },
        deleteMessage: () => {
            dispatch(deleteMessage())
        },
        updateMessage: () => {
            dispatch(updateMessage())
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageContainer);