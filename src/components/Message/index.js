import React, { Component } from 'react'
import { Label } from 'reactstrap'
import DashboardContainer from '../DashboardContainer'
import LeftJobComponent from './LeftJobComponent'
import MessagePanel from './MessagePanel'
import CandidateList from './CandidateList'
import './index.css'
import BackButton from '../../assets/images/message/back-button.png'

class Message extends Component {
   
    changeMessagePanelStatus = () => {
        const { changeMessagePanelStatus } = this.props
        changeMessagePanelStatus()
    }
    renderItem (messagePanelStatus) {
        const { changeMessagePanelStatus } = this.props
        if ( messagePanelStatus ) {
            return <CandidateList changeMessagePanelStatus = {changeMessagePanelStatus}/>
        } else {
            return <MessagePanel/>
        }
    }
    renderTitle (messagePanelStatus) {
        
        if ( messagePanelStatus ) {
            return <div className="back-list">
                        <Label>Candidate List</Label>
                    </div>
        } else {
            return <div className="back-list">
                        <img src={BackButton} alt="Back Button" onClick={this.changeMessagePanelStatus}/>
                        <Label>Back to Candidate list</Label>
                    </div>
        }
    }
    render () {
        const { messagePanelStatus } = this.props;
        return (
            <DashboardContainer isProfile={ true }>
                <div className="message-container">
                    <div className="message-left-panel">
                        <LeftJobComponent isActive={true}/>
                        <LeftJobComponent />
                    </div>
                    <div className="message-right-panel">
                        { this.renderTitle(messagePanelStatus)}
                        <div className="panel-container">
                            {this.renderItem(messagePanelStatus)}
                        </div>
                        {
                            !messagePanelStatus && <div className="message-conversation-panel">
                            <div className="message-box">
                                </div>
                            </div>
                        }
                        
                    </div>
                </div>
            </DashboardContainer>
        )
    }
}

export default Message