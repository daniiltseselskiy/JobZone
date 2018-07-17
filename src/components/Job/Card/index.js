import React , { Component } from 'react'
import { Container, Label } from 'reactstrap'
import './index.css'
import JobImage from '../../../assets/images/job/job-image.png'
import EditButton from '../../../assets/images/job/edit-round-button.png'
import DeleteButton from '../../../assets/images/job/delete-round-button.png'
import ActiveButton from '../../../assets/images/job/active-button.png'
import TitleIcon from '../../../assets/images/job/title-icon.png'
import InfoIcon from '../../../assets/images/job/info-icon.png'
import LocationIcon from '../../../assets/images/job/location-icon.png'
import SkillIcon from '../../../assets/images/job/skills-icon.png'
import GlobalIcon from '../../../assets/images/job/global-icon.png'
import DateIcon from '../../../assets/images/job/date-icon.png'
import ReliableIcon from '../../../assets/images/job/reliable-button.png'
class JobCard extends Component {
    render () {
        return (
            <Container className="card-content">
                <Container className="card-content-image">
                    <img src={JobImage} alt="Job Image" />
                    <img src={EditButton} alt="Edit Button Image" />
                    <img src={DeleteButton} alt="Delete Button Image" />
                </Container>
                <Container className="card-content-job-position">
                    <Label>Job Position</Label>
                    <img src={ActiveButton} alt="Active Button"/>
                </Container>
                <Container className="card-content-company">
                    <Label>Company Name</Label>
                    <Label>2 applicants</Label>
                </Container>
                <Container className="card-content-image-label">
                    <img src={ TitleIcon } alt="Title Icon" />
                    <Label>Barista</Label>
                </Container>
                <Container className="card-content-image-label">
                    <img src={ InfoIcon } alt="Info Icon" />
                    <Label>I am a hard working person with good experience in my position.I have an interest in many things like I am doing or going somewhere.</Label>
                </Container>
                <Container className="card-content-image-label">
                    <img src={ LocationIcon } alt="Location Icon" />
                    <Label>Lorem Ips, LA, California St.</Label>
                </Container>
                <Container className="card-content-image-label">
                    <img src={ SkillIcon } alt="Skill Icon" />
                    <img src={ ReliableIcon } alt="Reliable Icon" />
                </Container>
                <Container className="card-content-image-label">
                    <img src={ GlobalIcon } alt="Global Icon" />
                    <Label>English</Label>
                </Container>
                <Container className="card-content-image-label">
                    <img src={ DateIcon } alt="Date Icon" />
                    <Label>9:00am - 18:00pm Mon, Wed, Fri</Label>
                </Container>
                <Container className="card-content-label">
                    <Label>Posted January 9, 2018</Label>
                </Container>
            </Container>
        )
    }
}

export default JobCard