import React , { Component } from 'react'
import { Label, Input } from 'reactstrap'
import './index.css'

import OvalImage from '../../../assets/images/message/oval1.png'
import LocationImage from '../../../assets/images/job/location-icon.png'

class CandidateCard extends Component {
    changeMessagePanelStatus = () => {
        console.log("**********************************")
        const { changeMessagePanelStatus } = this.props
        changeMessagePanelStatus();
    }
    render () {
        
        return (
            <div className="candidate-card-container" onClick={this.changeMessagePanelStatus}>
                <div className="left-card">
                    <div className="image-content">
                        <img src={ OvalImage } alt="Oval Image" />
                    </div>    
                    <div className="label-content">
                        <Label>Sara Smith</Label>
                        <Label>Profession</Label>
                        <div className="left-location-container">
                            <img src={ LocationImage } alt="Location Image" />
                            <Label>Lorem Ips, LA, California St.</Label>
                        </div>    
                    </div>     
                </div>
                <div className="right-card">
                    <Label>We are cleaning every type of high buildings windows and working with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </Label>
                </div>
            </div>
        )
    }
}

export default CandidateCard