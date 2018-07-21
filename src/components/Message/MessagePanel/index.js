import React, { Component } from 'react'
import './index.css'
import RightUserMessageComponent from '../RightUserMessageComponent'

class MessagePanel extends Component {
    render () {
        return (
            <div className="message-panel-container">
                <RightUserMessageComponent />
            </div>
        )
    }
}
export default MessagePanel