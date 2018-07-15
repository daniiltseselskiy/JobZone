import React, { Component } from 'react'
import { Container, Form , Row, Col, Label, Input } from 'reactstrap'
import SideBar from '../SideBar'
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
        const { isEditProfile, isEditMember } = this.props

        return (
            <Container className="profile-container">
                <Row>
                    <Col lg="2">
                        <SideBar />
                    </Col>
                    <Col lg="10" className="content-container">
                        <Row>
                            <Col lg="8" >
                                <Container className="profile-content-container">
                                    <Form>
                                        <Container className="top-profile-content">
                                            <div>
                                                <img src={ ProfilePicture } alt="Profile Picture" />
                                                { isEditProfile && <Label>Upload Image</Label> }
                                            </div>
                                            <Container>
                                                {this.renderItem(isEditProfile, "Company Name", "Company Name", true)}
                                                {this.renderItem(isEditProfile, "Location", "Location", true)}
                                            </Container>
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
                                                {this.renderItem(isEditProfile, "+1 818 789 897", "Phone Number", true)}
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
                            <Col lg="3">
                                <Container className="member-content-container">
                                    <Form>
                                        <Container>
                                            <img src={ UserPicture } alt="User Picture" />
                                            <img src={ EditProfileIcon } alt="Edit Profile Icon" onClick={this.onEditMember}/>
                                        </Container>
                                        <Container>
                                            {this.renderItem(isEditMember, "Member Name", "Member Name", true)}
                                            {this.renderItem(isEditMember, "Position", "Position", true)}
                                        </Container>
                                        <Container>
                                            <img src={ EmailIcon } alt="Email Icon" />
                                            {this.renderItem(isEditMember, "Loremipsum@gmail.com", "Email", true)}
                                        </Container>
                                        <Container>
                                            <img src={ PhoneIcon } alt="Phone Icon" />
                                            {this.renderItem(isEditMember, "+1 818 789 897", "Phone Mumber", true)}
                                        </Container>
                                        <Container>
                                            <Label>Change Password</Label>
                                            <img src={ NextIcon } alt="Next Icon" />
                                        </Container>
                                        { isEditMember && <img src={ SaveButton } alt="Save Button" /> }
                                    </Form>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile
