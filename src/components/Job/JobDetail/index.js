import React, { Component } from 'react'
import AppliedUserCard from '../AppliedUserCard'
import ExpandedAppliedUserCard from '../ExpandedAppliedUserCard'
import DateComponent from '../DateComponent'
import { Container, Label } from 'reactstrap'
import JobImage from '../../../assets/images/job/job-image.png'
import './index.css'
import EditButton from '../../../assets/images/job/edit-button.png'
import DeleteButton from '../../../assets/images/job/delete-button.png'
import ActiveButton from '../../../assets/images/job/active-button.png'

class JobDetail extends Component {
    renderRelevantTap = (currentTap) => {
        if (currentTap === 1) {
            return (
                <div className="job-content-field">
                    <AppliedUserCard isShortlist={false}/>
                    <AppliedUserCard isShortlist={false}/>
                </div>
            )
        } else if (currentTap === 2) {
            return (
                <div className="job-content-field">
                    <DateComponent />
                    <AppliedUserCard isShortlist={true}/>
                </div>
            )
        } else if (currentTap === 3) {
            return (
                <div className="job-content-field">
                    <AppliedUserCard isShortlist={true}/>
                </div>
            )
        } else if (currentTap === 4) {
            return (
                <div className="job-content-field">
                    <AppliedUserCard isShortlist={true}/>
                    <DateComponent />
                </div>
            )
        } else if (currentTap === 5) {
            return (
                <div className="job-content-field">
                    currently, this page doesn't exist.
                </div>
            )
        }
    }

    render () {
        const { onChangeContent, currentTap } = this.props;

        return (
            <div className="job-detail-container">
                <div className="job-memo">
                    <img className="job-image" src={ JobImage } alt="Job Image" />
                    <div className="job-memo-content">
                        <div className="job-company-container">
                            
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
                </div>
                <div className="job-detail-content">
                    <div className="job-detail-header">
                        <div className={currentTap === 1 ? 'job-detail-header-index active' : 'job-detail-header-index'} onClick={() =>onChangeContent(1)}>
                            <Label>1</Label>
                            <Label>Applied</Label>
                        </div>
                        <div className={currentTap === 2 ? 'job-detail-header-index active' : 'job-detail-header-index'} onClick={() =>onChangeContent(2)}>
                            <Label>1</Label>
                            <Label>Direct Schedule</Label>
                        </div>
                        <div className={currentTap === 3 ? 'job-detail-header-index active' : 'job-detail-header-index'} onClick={() =>onChangeContent(3)}>
                            <Label>1</Label>
                            <Label>Shortlisted</Label>
                        </div>
                        <div className={currentTap === 4 ? 'job-detail-header-index active' : 'job-detail-header-index'} onClick={() =>onChangeContent(4)}>
                            <Label>1</Label>
                            <Label>Interviewed</Label>
                        </div>
                        <div className={currentTap === 5 ? 'job-detail-header-index active' : 'job-detail-header-index'} onClick={() =>onChangeContent(5)}>
                            <Label>1</Label>
                            <Label>Rejected</Label>
                        </div>
                    </div>
                    <div className="applied-user-card">
                        {/* <DateComponent />
                        <AppliedUserCard isShortlist={true}/> */}
                        {/* <AppliedUserCard isShortlist={false}/>
                        <AppliedUserCard isScheduled={true}/> */}
                        
                        {/* <ExpandedAppliedUserCard /> */}
                        {
                            this.renderRelevantTap(currentTap)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default JobDetail