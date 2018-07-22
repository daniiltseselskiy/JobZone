import React , { Component } from 'react'
import { Container, Row , Col, Input, Label, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import './index.css'
import AuthContainer from '../AuthContainer'
import SignInButton from '../../assets/images/authcontainer/sign-in-button.png'
import BackgroundImage from '../../assets/images/authcontainer/auth-image.png';

class LogIn extends Component {
    render () {
        return (
            <AuthContainer BackgroundImage={BackgroundImage}>
                <Container className="login-container">
                    <Label className="label-top-title">Sign In</Label>
                    <Form>
                        <FormGroup>
                            <Input type="email" name="email" id="signupEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password" id="signinPassword" placeholder="Password" />
                        </FormGroup>                    
                        <FormGroup check>
                            <Link to="/forgotpassword">Forgot Password?</Link>
                        </FormGroup>
                        <Link to="/dashboard">
                            <img className="one-image-button" src={ SignInButton } alt="Continue Button" />
                        </Link>
                    </Form>
                    <Label className="label-bottom-link">
                        Need an account?{' '}
                        <Link to="/sign-up">Sign Up</Link>
                    </Label>
                </Container>
            </AuthContainer>
        )
    }
}

export default LogIn