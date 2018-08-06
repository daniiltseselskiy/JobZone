import React , { Component } from 'react'
import { Label } from 'reactstrap'
import './index.css'
import ShortlistButton from '../../../assets/images/job/shortlist-button.png'
import RejectButton from '../../../assets/images/job/reject-button.png'
import FullProfileButton from '../../../assets/images/job/full-profile-button.png'
import OvalImage from '../../../assets/images/job/oval.png'
import LocationImage from '../../../assets/images/job/location-icon.png'
import InfoImage from '../../../assets/images/job/info-icon.png'
import SchoolImage from '../../../assets/images/job/school-icon.png'
import PositionImage from '../../../assets/images/job/position-icon.png'
import SkillsImage from '../../../assets/images/job/skills-icon.png'
import GlobalImage from '../../../assets/images/job/global-icon.png'
import BestOfferImage from '../../../assets/images/job/best-offer.png'

class ExpandedAppliedUserCard extends Component {
    render () {
        return (
            <div className="expanded-applied-user-card-content">
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
                    <div className="left-school-container">
                        <img src={ SchoolImage } alt="School Image" />
                        <div className="left-school-label-container">
                            <Label>Lorem Ipsum school</Label>
                            <Label>Sep 2006 - May 2016</Label>
                            <Label>Lorem ipsum dollar set amet</Label>
                        </div>
                        
                    </div>
                    <div className="left-school-container">
                        <img src={ PositionImage } alt="Position Image" />
                        <div className="left-school-label-container">
                            <Label>Lorem Ipsum school</Label>
                            <Label>Category</Label>
                            <Label>Company Name</Label>
                            <Label>Location</Label>
                            <Label>Feb 2018 - Mar 2018</Label>
                            <Label>Lorem ipsum dollar set amet</Label>
                        </div>
                    </div>
                    <div className="left-school-container">
                        <img src={ SkillsImage } alt="Skills Image" />
                        <div className="left-skills-label-container">
                            <Label>Cooking</Label>
                            <Label>Cooking</Label>
                        </div>
                    </div>
                    <div className="left-school-container">
                        <img src={ GlobalImage } alt="Global Image" />
                        <div className="left-global-label-container">
                            <Label>English, Label</Label>
                        </div>
                    </div>
                    <div>
                        <img src={ BestOfferImage } alt="Best Offer Image" />
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

export default ExpandedAppliedUserCard