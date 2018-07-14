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
                {/* <Container className="login-container">
                    <h1>Sign In</h1>
                    <Input placeholder="Phone or Email" />
                    <Input placeholder="Password" type="password"/>
                    <a href="#">Forgot Password?</a>
                    <img src={ SignInButton } alt="Sign In Button" />
                    <Container className="bottom-container">
                        <h2>Need an account?</h2>
                        <button>Sign Up</button>
                    </Container>
                </Container> */}
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
                            <Link to="/">Forgot Password</Link>
                        </FormGroup>
                        <img className="one-image-button" src={ SignInButton } alt="Continue Button" />
                    </Form>
                    <Label className="label-bottom-link">
                        Need an account?{' '}
                        <Link to="/log-in">Sign Up</Link>
                    </Label>
                </Container>
            </AuthContainer>
        )
    }
}

export default LogIn