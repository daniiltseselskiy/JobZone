import React , { Component } from 'react'
import { Container, Row , Col, Input, FormGroup, Label, Form, FormText, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './index.css'
import ContinueButton from '../../assets/images/authcontainer/continue-button.png'
import ThirdStep from './ThirdStep';


class FirstStep extends Component {
    constructor () {
        super ()
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
        }
    }
    handleChangeEmail = (evt) => {
        this.setState({
            email: evt.target.value,
        })
    }
    handleChangePassword = (evt) => {
        this.setState({
            password: evt.target.value,
            confirmPassword: evt.target.value,
        })
    }
    changeSignUpStep = () => {
        const { setEmailandPassword ,changeSignUpStep } = this.props
        setEmailandPassword(this.state.email, this.state.password, this.state.confirmPassword)
        changeSignUpStep(2)
    }
    render () {
        return (
            <Container className="signup-container">
                <Label className="label-top-title">Create an Account</Label>
                <Form>
                    <FormGroup>
                        <Input value={this.state.email} type="email" name="email" id="signupEmail" placeholder="Email" onChange={this.handleChangeEmail}/>
                    </FormGroup>
                    <FormGroup>
                        <Input value={this.state.password} type="password" name="password" id="signupPassword" placeholder="Password" onChange={this.handleChangePassword}/>
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
                    <img className="one-image-button" src={ ContinueButton } alt="Continue Button" onClick={this.changeSignUpStep}/>
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