import React, { Component } from 'react'
import { Container, Form , Row, Col, Label, Input } from 'reactstrap'
import DashboardContainer from '../DashboardContainer'
import './index.css'
import ProfilePicture from '../../assets/images/profile/profile-picture.png'
import EditProfileIcon from '../../assets/images/profile/edit-profile-icon.png'
import CreateCompanyIcon from '../../assets/images/profile/create-company-icon.png'
import EmailIcon from '../../assets/images/profile/email-icon.png'
import PhoneIcon from '../../assets/images/profile/phone-icon.png'
import WarningIcon from '../../assets/images/profile/warning-icon.png'
import UserPicture from '../../assets/images/profile/user-icon-2.png'
import NextIcon from '../../assets/images/profile/next-icon.png'
import SaveButton from '../../assets/images/profile/save-button.png'
import ProfileStatus from '../../assets/images/profile/profile-status.png'

class Profile extends Component {

    constructor () {
        super ()
        this.state = {
            companyName: "",
            role: "",
            email: "",
            phone: "",
        }
    }
    //receive props change
    componentWillReceiveProps(nextProps) {
        this.setState ({
            companyName: nextProps.profile.provider,
            role: nextProps.profile.role_id,
            email: nextProps.profile.email,
            phone: nextProps.profile.phone,
        })
    }
    //handle Change event
    handleChangeCompanyName = (evt) => {
        this.setState({
            companyName: evt.target.value
        })
    }
    handleChangePosition = (evt) => {
        this.setState({
            role: evt.target.value
        })
    }
    handleChangeEmail = (evt) => {
        this.setState({
            email: evt.target.email
        })
    }
    handleChangePhone = (evt) => {
        this.setState({
            phone: evt.target.value
        })
    }
    //render 
    renderItem = ( isEdit, Description1, Description2, single=false ) => {
        if ( !isEdit ) {
            return <Label>{Description1}</Label>
        } else {
            if (single === true) {
                return <input type="text" placeholder={Description2} />
            } else {
                return <textarea type="text" placeholder={Description2} />
            }
        }
    }
    
    onEditProfile = () => {
        const { onOpenEditProfile } = this.props;
        onOpenEditProfile();
    }
    onEditMember = () => {
        const { onOpenEditMember } = this.props;
        onOpenEditMember();
    }
    render () {
        const { isEditProfile, isEditMember, profile } = this.props

        return (
            <DashboardContainer>
                <Row>
                    <Col xl="8" lg="12" md="12">
                        <Container className="profile-content-container">
                            <Form>
                                <Container className="top-profile-content">
                                    <div>
                                        <img src={ ProfilePicture } alt="Profile Picture" />
                                        { isEditProfile && <Label>Upload Image</Label> }
                                    </div>
                                    <div>
                                        {this.renderItem(isEditProfile, "Company Name", "Company Name", true)}
                                        {this.renderItem(isEditProfile, "Location", "Location", true)}
                                    </div>
                                        {
                                            !isEditProfile &&   <Container>
                                                                    <img src={ EditProfileIcon } alt="Edit Profile Icon" onClick={this.onEditProfile} />
                                                                    <img src={ CreateCompanyIcon } alt="Create New Company Icon"/>
                                                                </Container>
                                        }
                                        {
                                            isEditProfile &&    <Container>
                                                                    <img className="profile-status" src={ ProfileStatus } alt="Profile Status"/>
                                                                </Container>
                                        }
                                </Container>
                                <Container className="bottom-profile-content">
                                    <Container>
                                        <img src={ EmailIcon } alt="Email Icon" />
                                        {this.renderItem(isEditProfile, "Loremipsum@gmail.com", "Email", true)}
                                    </Container>
                                    <Container>
                                        <img src={ PhoneIcon } alt="Phone Icon" />
                                        {this.renderItem(isEditProfile, profile.phone, "Phone Number", true)}
                                    </Container>
                                    <Container>
                                        <img src={ WarningIcon } alt="Warning Icon" />
                                        {this.renderItem(isEditProfile, "We are cleaning every type of high buildings windows and working with Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. " ,"Write about company")}
                                    </Container>
                                </Container>
                                <Container>
                                    { isEditProfile && <img src={ SaveButton } alt="Save Button" onClick={this.onEditProfile}/> }
                                </Container>
                            
                            
                            </Form>
                        </Container>
                    </Col>
                    <Col xl="4" lg="12" md="12">
                        <Container className="member-content-container">
                            <Form>
                                <div>
                                    <img src={ UserPicture } alt="User Picture" />
                                    <img src={ EditProfileIcon } alt="Edit Profile Icon" onClick={this.onEditMember}/>
                                </div>
                                <div>
                                    {!isEditMember? <Label>{this.state.companyName}</Label> : <Input value={this.state.companyName} type='text' onChange={this.handleChangeCompanyName}/>}
                                    {!isEditMember? <Label>{this.state.role}</Label> : <Input value={this.state.role} type='text'onChange={this.handleChangePosition}/>}
                                </div>
                                <div className="image-input-container">
                                    <img src={ EmailIcon } alt="Email Icon" />
                                    {!isEditMember? <Label>{this.state.email}</Label> : <Input value={this.state.email} type='email' onChange={this.handleChangeEmail}/>}
                                </div>
                                <div className="image-input-container">
                                    <img src={ PhoneIcon } alt="Phone Icon" />
                                    {!isEditMember? <Label>{this.state.phone}</Label> : <Input value={this.state.phone} type='tel' onChange={this.handleChangePhone}/>}
                                </div>
                                <div>
                                    <Label>Change Password</Label>
                                    <img src={ NextIcon } alt="Next Icon" />
                                </div>
                                { isEditMember && <img src={ SaveButton } alt="Save Button" onClick={this.onEditMember}/> }
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </DashboardContainer>
        )
    }
}

export default Profile
