import React , { Component } from 'react'
import { Container, Row , Col, Input } from 'reactstrap'
import './index.css'
import AuthContainer from '../AuthContainer'
import SignInButton from '../../assets/images/authcontainer/sign-in-button.png'

class LogIn extends Component {
    render () {
        return (
            <AuthContainer>
                <Container className="login-container">
                    <h1>Sign In</h1>
                    <Input placeholder="Phone or Email" />
                    <Input placeholder="Password" type="password"/>
                    <a href="#">Forgot Password?</a>
                    <img src={ SignInButton } alt="Sign In Button" />
                    <Container className="bottom-container">
                        <h2>Need an account?</h2>
                        <button>Sign Up</button>
                    </Container>
                </Container>
            </AuthContainer>
        )
    }
}

export default LogIn