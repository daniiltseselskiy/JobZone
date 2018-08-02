import React, { Component } from 'react'
import { Label } from 'reactstrap'
import DashboardContainer from '../DashboardContainer'
import LeftJobComponent from './LeftJobComponent'
import MessagePanel from './MessagePanel'
import CandidateList from './CandidateList'
import './index.css'
import BackButton from '../../assets/images/message/back-button.png'
import Item from '../../../node_modules/antd/lib/list/Item';
const jobList = [
    {
        "id": 5,
        "title": "Rails dev",
        "address": null,
        "status_id": 1,
        "city": null,
        "status": "active",
        "created_date": "May 20, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    },
    {
        "id": 4,
        "title": "fsdjhfjk",
        "address": null,
        "status_id": 1,
        "city": null,
        "status": "active",
        "created_date": "April 30, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    },
    {
        "id": 3,
        "title": "Sr Software Engineer",
        "address": null,
        "status_id": 1,
        "city": "Karachi",
        "status": "active",
        "created_date": "April 29, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    },
    {
        "id": 2,
        "title": "Sr Software Engineer",
        "address": null,
        "status_id": 1,
        "city": "Isb",
        "status": "active",
        "created_date": "April 28, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    },
    {
        "id": 1,
        "title": "Jobezie",
        "address": null,
        "status_id": 1,
        "city": "Lahore",
        "status": "active",
        "created_date": "April 25, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    }
]
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
            return  <div className="back-list">
                        <Label>Candidate List</Label>
                    </div>
        } else {
            return  <div className="back-list">
                        <img src={BackButton} alt="Back Button" onClick={this.changeMessagePanelStatus}/>
                        <Label>Back to Candidate list</Label>
                    </div>
        }
    }
    renderJobComponent = (jobList) => {
       
        return jobList.map( (job, index) => {
            
            return   <div key={index}>
                        <LeftJobComponent  job={job}/>
                    </div>
        })
    }
    render () {
        const { messagePanelStatus } = this.props;
        return (
            <DashboardContainer isProfile={ true }>
                <div className="message-container">
                    <div className="message-left-panel">
                        {this.renderJobComponent(jobList)}
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