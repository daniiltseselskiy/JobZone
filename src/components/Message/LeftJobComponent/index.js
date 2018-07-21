import React, { Component } from 'react'
import { Label } from 'reactstrap'
import './index.css'
import JobImage from '../../../assets/images/message/job-image1.png'
import LocationIcon from '../../../assets/images/message/location-icon.png'

class LeftJobComponent extends Component {
    render () {
        return (
            <div className="left-job-container">
                <div>
                    <img src={JobImage} alt="Job Image"/>
                </div>
                <div>
                    <Label className="job-title">Job Title</Label>
                    <Label className="company-name">Company Name</Label>
                    <div className="location-component">
                        <img src={LocationIcon} alt="Location Icon" />
                        <Label className="location-text">Lorem Ips LA, California St.</Label>
                    </div>
                    <Label className="candidate">2 Candidate</Label>
                </div>
            </div>
        )
    }
}

export default LeftJobComponent