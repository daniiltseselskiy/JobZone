import React, { Component } from 'react'
import { Label } from 'reactstrap'
import './index.css'

class NotificationItem extends Component {
    render () {
        const { item , key} = this.props
        return (
            <div key={key} className="notification-item-container">
                <div className="message-part">
                    <Label>{item.message}</Label>
                    <Label>{item.time} ago</Label>
                </div>
                <img src={item.avatar} alt=""/>
            </div>
        )
    }
}

export default NotificationItem