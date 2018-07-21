import React , { Component } from 'react'
import { Label } from 'reactstrap'
import './index.css'
import JobPositionRect from '../../../assets/images/dashboard/job-position-rectangle.png'
import LocationImage from '../../../assets/images/dashboard/location-icon.png'
import ViewJobButton from '../../../assets/images/dashboard/view-job-button.png'
class JobPositionComponent extends Component {
    render () {
        return (
            <div className="job-item-container">
            {/* <img className="background-image" src={JobPositionRect} alt="Job Position Rect" /> */}
                <Label>Job Position</Label>
                <Label>Company Name</Label>
                <div className="location-image-container">
                    <img src={LocationImage} alt="Location Image" />
                    <div>
                        <Label>Lorem Ips, LA, California St.</Label>
                        <Label>Posted January 9, 2018</Label>
                    </div>
                </div>
                <div className="applied-shortlisted-container">
                    <div className="applied-content">
                        <Label>2</Label>
                        <Label>Applied</Label>
                    </div>
                    <div className="shortlisted-content">
                        <Label>1</Label>
                        <Label>Shortlisted</Label>
                    </div>
                </div>
                <img src={ViewJobButton} alt="View Job Button" />
                
            </div>
        )
    }
}

export default JobPositionComponent