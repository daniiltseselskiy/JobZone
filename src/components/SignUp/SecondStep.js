import React , { Component } from 'react'
import './index.css'
import { Container, Col, Form, FormGroup, Row, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import ContinueButton from '../../assets/images/authcontainer/continue-button.png'
import BackButton from '../../assets/images/authcontainer/back-button.png'

class SecondStep extends Component {
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
                    <FormGroup>
                        <Input type="text" name="location" id="signupLocation" placeholder="Location" />
                    </FormGroup>          
                    <Container className="stepper-container">
                        <img src={BackButton} alt="Back Button" />
                        <img src={ ContinueButton } alt="Continue Button" />
                    </Container>         
                    
                </Form>
            </Container>
        )
    }
}

export default SecondStep;