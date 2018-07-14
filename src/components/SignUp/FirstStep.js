import React , { Component } from 'react'
import { Container, Row , Col, Input, FormGroup, Label, Form, FormText, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './index.css'
import ContinueButton from '../../assets/images/authcontainer/continue-button.png'


class FirstStep extends Component {
    render () {
        return (
            <Container className="signup-container">
                <Label className="label-top-title">Create an Account</Label>
                <Form>
                    <FormGroup>
                        <Input type="email" name="email" id="signupEmail" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="signupPassword" placeholder="Password" />
                    </FormGroup>                    
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
                                I agree to the{' '}
                                <Link to="/">Terms & Conditions</Link>{' '}
                                and{' '}
                                <Link to="/">Privacy Policy</Link>
                        </Label>
                    </FormGroup>
                    <img className="one-image-button" src={ ContinueButton } alt="Continue Button" />
                </Form>
                <Label className="label-bottom-link">
                    Do you have an account?{' '}
                    <Link to="/log-in">Sign In</Link>
                </Label>
            </Container>
        )
    }
}

export default FirstStep