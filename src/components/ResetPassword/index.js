import React , { Component } from 'react'
import { Container, Row , Col, Input } from 'reactstrap'
import './index.css'
import AuthContainer from '../AuthContainer'
import BackButton from '../../assets/images/authcontainer/back-button.png'
import SignInButton from '../../assets/images/authcontainer/sign-in-button.png' 
import BackgroundImage from '../../assets/images/authcontainer/auth-image.png';

class ResetPassword extends Component {
    render () {
        return (
            <AuthContainer BackgroundImage={BackgroundImage}>
                <Container className="reset-password-container">
                    <h1>Reset Password</h1>
                    <Input placeholder="New Password" type="password" />
                    <Input placeholder="Repeat Password" type="password"/>
                    <div className="bottom-container">
                        <img src={BackButton} alt="Back Button" />
                        <img src={SignInButton} alt="SignIn Button" />
                    </div>              
                </Container>
            </AuthContainer>
        )
    }
}

export default ResetPassword