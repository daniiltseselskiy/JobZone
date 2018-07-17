import React, { Component } from 'react'
import AppliedUserCard from '../AppliedUserCard'
import ExpandedAppliedUserCard from '../ExpandedAppliedUserCard'
import { Container, Label } from 'reactstrap'
import JobImage from '../../../assets/images/job/job-image.png'
import './index.css'
import EditButton from '../../../assets/images/job/edit-button.png'
import DeleteButton from '../../../assets/images/job/delete-button.png'
import ActiveButton from '../../../assets/images/job/active-button.png'

class JobDetail extends Component {
    render () {
        return (
            <div className="job-detail-container">
                <div className="job-memo">
                    <div className="job-company-container">
                        <img src={ JobImage } alt="Job Image" />
                        <Label>Job Position</Label>
                        <Label>Company Name</Label>
                    </div>
                    <div className="edit-delete-button">
                        <img src={EditButton} alt="Edit Button" />
                        <img src={DeleteButton} alt="Delete Button" />
                    </div>
                    <div className="active-applicants-container">
                        <img src={ActiveButton} alt="Active Button"/>
                        <Label>2 applicants</Label>
                    </div>
                </div>
                <div className="job-detail-content">
                    <div className="job-detail-header">
                        <div className="job-detail-header-index">
                            <Label>1</Label>
                            <Label>Applied</Label>
                        </div>
                        <div className="job-detail-header-index">
                            <Label>1</Label>
                            <Label>Direct Schedule</Label>
                        </div>
                        <div className="job-detail-header-index">
                            <Label>1</Label>
                            <Label>Shortlisted</Label>
                        </div>
                        <div className="job-detail-header-index">
                            <Label>1</Label>
                            <Label>Interviewed</Label>
                        </div>
                        <div className="job-detail-header-index">
                            <Label>1</Label>
                            <Label>Rejected</Label>
                        </div>
                    </div>
                    <div className="applied-user-card">
                        <AppliedUserCard />
                        <AppliedUserCard />
                        {/* <ExpandedAppliedUserCard /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default JobDetail