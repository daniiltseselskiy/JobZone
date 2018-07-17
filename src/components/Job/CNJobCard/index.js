import React, { Component } from 'react'
import { Container, Label , Input} from 'reactstrap'
import './index.css'
import JobImage from '../../../assets/images/job/job-image.png'
import TitleIcon from '../../../assets/images/job/title-icon.png'
import InfoIcon from '../../../assets/images/job/info-icon.png'
import LocationIcon from '../../../assets/images/job/location-icon.png'
import SkillIcon from '../../../assets/images/job/skills-icon.png'
import GlobalIcon from '../../../assets/images/job/global-icon.png'
import DateIcon from '../../../assets/images/job/date-icon.png'
import PostButton from '../../../assets/images/homepage/post-job-button.png'
import SaveButton from '../../../assets/images/job/save-job-button.png'
import DeleteButton from '../../../assets/images/job/delete-job-button.png'

const dayLabel = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

class CNJobCard extends Component {

    constructor ( props ) {
        super (props)
        this.renderInputByEditable = this.renderInputByEditable.bind(this)
        const { isEdit } = this.props
        this.state = {
            isEdit: isEdit
        }
    }
    renderInputByEditable = ( value, placeholder ) => {
        if ( this.state.isEdit ) {
            return <Input value={ value }></Input>
        } else {
            return <Input placeholder={ placeholder }></Input>
        }
    }
    renderDescription = ( value, placeholder ) => {
        if ( this.state.isEdit ) {
            return <Input type="textarea" value={ value }></Input>
        } else {
            return <Input type="textarea" placeholder={ placeholder }></Input>
        }
    }
    renderButton = () => {
        if ( this.state.isEdit ) {
            return  <Container className="cnjob-container-button">
                        <img src={ SaveButton } alt="Save Button" />
                        <img src={ DeleteButton } alt="Delete Button" />
                    </Container>
                   
        } else {
            return  <Container className="cnjob-container-button">
                        <img src={ PostButton } alt="Post Button" />
                    </Container>
        }
    }
    render () {
        return (
            <Container className="cnjob-container">
                    <Container className="cnjob-container-image">
                        <img src={JobImage} alt="Job Image" />
                        <Label>upload image</Label>
                    </Container>
                    <Container className="cnjob-container-job-position">
                        {this.renderInputByEditable("Job Position", "Job Position")}
                    </Container>
                    <Container className="cnjob-container-company">
                        {this.renderInputByEditable("Company Name", "Company Name")}
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ TitleIcon } alt="Title Icon" />
                        {this.renderInputByEditable("Barista", "Category")}
                    </Container>
                    <Container className="cnjob-container-description">
                        <img src={ InfoIcon } alt="Info Icon" />
                        {this.renderDescription("I am a hard working person with good experiences in my position", "Description")}
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ LocationIcon } alt="Location Icon" />
                        <Input value="Lorem Ips, LA, California St."></Input>
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ SkillIcon } alt="Skill Icon" />
                        {this.renderInputByEditable("Javascript", "Skills")}
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ GlobalIcon } alt="Global Icon" />
                        <Input value="English"></Input>
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ DateIcon } alt="Date Icon" />
                        {this.renderInputByEditable("9:00am-18:00pm", "")}
                    </Container>
                    <Container className="cnjob-container-day">
                        <Label>Mon</Label>
                        <Label>Tue</Label>
                        <Label>Wed</Label>
                        <Label>Thu</Label>
                        <Label>Fri</Label>
                        <Label>Sat</Label>
                        <Label>Sun</Label>
                    </Container>
                    { this.renderButton()}
                </Container>
        )
    }
}

export default CNJobCard