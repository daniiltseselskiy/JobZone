import React , { Component } from 'react'
import { Label, Input } from 'reactstrap'
import './index.css'
import ShortlistButton from '../../../assets/images/job/shortlist-button.png'
import RejectButton from '../../../assets/images/job/reject-button.png'
import FullProfileButton from '../../../assets/images/job/full-profile-button.png'
import OvalImage from '../../../assets/images/job/oval.png'
import LocationImage from '../../../assets/images/job/location-icon.png'
import InfoImage from '../../../assets/images/job/info-icon.png'

class AppliedUserCard extends Component {
    render () {
        return (
            <div className="applied-user-card-content">
                <div className="left-card">
                    <div className="left-top-container">
                    <div className="image-content">
                        <img src={ OvalImage } alt="Oval Image" />
                    </div>    
                    <div className="label-content">
                        <Label>Sara Smith</Label>
                        <Label>Profession</Label>
                    </div>
                    </div>
                    <div className="left-location-container">
                        <img src={ LocationImage } alt="Location Image" />
                        <Label>Lorem Ips, LA, California St.</Label>
                    </div>
                    <div className="left-description-container">
                        <img src={ InfoImage } alt="Info Image" />
                        <Label>I am a hard working person with good experience in my position.I have an interest in many things like I am doing or going somewhere.</Label>
                    </div>
                </div>
                <div className="right-card">
                    <img src={ShortlistButton} alt="Shortlist Button"/>
                    <img src={RejectButton} alt="Reject Button"/>
                    <img src={FullProfileButton} alt="Full Profile Button"/>
                </div>
            </div>
        )
    }
}

export default AppliedUserCard