import React , { Component } from 'react'
import './index.css'
import { Container, Col, Form, FormGroup, Row, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import ContinueButton from '../../assets/images/authcontainer/continue-button.png'
import BackButton from '../../assets/images/authcontainer/back-button.png'


class SecondStep extends Component {
    constructor (props) {
        super (props)
        const {email, password, confirmPassword, phone, company, locale} = this.props
        this.state = {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            phone: phone,
            company: company,
            locale: locale,
        }
    }
    handleChangeCompany = (evt) => {
        this.setState({
            company: evt.target.value,
        })
    }
    handleChangePhone = (evt) => {
        this.setState({
            phone: evt.target.value
        })
    }
    handleChangeLocation = (evt) => {
        this.setState({
            locale: evt.target.value,
        })
    }
    backSignUpStep = () => {
        const { signUpStep , changeSignUpStep } = this.props
        const step = signUpStep - 1
        changeSignUpStep(step)
    }
    forwardSignUpStep = () => {
       
        const { signUpStep , changeSignUpStep, signUp } = this.props
        const step = signUpStep + 1
        changeSignUpStep(step)
        signUp(this.state)
    }
    render () {
        return (
            <Container className="signup-container">
                <Label className="label-top-title">Create an Account</Label>
                <Form>
                    <FormGroup>
                        <Input value={this.state.company} type="text" name="company" id="company" placeholder="Company" onChange={this.handleChangeCompany}/>
                    </FormGroup>
                    <FormGroup>
                        <Input value={this.state.phone} type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={this.handleChangePhone}/>
                    </FormGroup>  
                    <FormGroup>
                        <Input value={this.state.locale} type="text" name="location" id="signupLocation" placeholder="Location" onChange={this.handleChangeLocation}/>
                    </FormGroup>          
                    <Container className="stepper-container">
                        <img src={BackButton} alt="Back Button" onClick={this.backSignUpStep}/>
                        <img src={ ContinueButton } alt="Continue Button" onClick={this.forwardSignUpStep}/>
                    </Container>         
                    
                </Form>
            </Container>
        )
    }
}

export default SecondStep;