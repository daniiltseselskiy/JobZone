import React, { Component } from 'react'
import { Container, Label , Input} from 'reactstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
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
        
        const { isEdit } = this.props
        this.state = {
            isEdit: isEdit,
            jobPosition: "",
            company: "",
            title: "",
            skills: "",
            location: "",
            description: "",
            language: "",
        }
    }
    saveJob = () => {

    }
    createJob = () => {
        const { postJob } = this.props
        var item = []
        item.jobPosition = this.state.jobPosition
        item.company = this.state.company
        item.title = this.state.title
        item.skills = this.state.skills
        item.location = this.state.location
        item.description = this.state.description
        item.language = this.state.language
        postJob(item)
    }
    deleteJob = () => {

    }
    //Handle Onchange
    handleChangeForjobPosition = (evt) => {
        this.setState({
            jobPosition: evt.target.value,
        })
    }
    handleChangeForCompany = (evt) => {
        this.setState({
            company: evt.target.value,
        })
    }
    handleChangeForTitle = (evt) => {
        this.setState({
            title: evt.target.value,
        })
    }
    handleChangeForSkills = (evt) => {
        this.setState({
            skills: evt.target.value,
        })
    }
    handleChangeForDescription = (evt) => {
        this.setState({
            description: evt.target.value,
        })
    }
    handleChangeForLocation = (evt) => {
        this.setState({
            location: evt.target.value,
        })
    }
    handleChangeForLanguage = (evt) => {
        this.setState({
            language: evt.target.value,
        })
    }
    //Render 
    renderButton = () => {
        if ( this.state.isEdit ) {
            return  <Container className="cnjob-container-button">
                        <img src={ SaveButton } alt="Save Button" onClick={this.saveJob}/>
                        <img src={ DeleteButton } alt="Delete Button" onClick={this.deleteJob}/>
                    </Container>
                   
        } else {
            return  <Container className="cnjob-container-button">
                        <img src={ PostButton } alt="Post Button" onClick={this.createJob}/>
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
                        <Input value={this.state.jobPosition} placeholder="Job Position" onChange={this.handleChangeForjobPosition}></Input>
                    </Container>
                    <Container className="cnjob-container-company">
                        <Input value={this.state.company} placeholder="Company Name" onChange={this.handleChangeForCompany}></Input>
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ TitleIcon } alt="Title Icon" />
                        <Input value={this.state.title} placeholder="Category" onChange={this.handleChangeForTitle}></Input>
                    </Container>
                    <Container className="cnjob-container-description">
                        <img src={ InfoIcon } alt="Info Icon" />
                        <Input type="textarea" value={this.state.description} placeholder="Description" onChange={this.handleChangeForDescription}></Input>
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ LocationIcon } alt="Location Icon" />
                        <Input value={this.state.location} onChange={this.handleChangeForLocation} ></Input>
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ SkillIcon } alt="Skill Icon" />
                        <Input value={this.state.skills} placeholder="Javascript" onChange={this.handleChangeForSkills} ></Input>
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ GlobalIcon } alt="Global Icon" />
                        <Input value="English" onChange={this.handleChangeForLanguage}></Input>
                    </Container>
                    <Container className="cnjob-container-image-input">
                        <img src={ DateIcon } alt="Date Icon" />
                        <DatePicker />
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