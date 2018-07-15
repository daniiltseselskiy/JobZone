import React, { Component } from 'react'
import { Container, Label } from 'reactstrap'
import VerificationInProgressImage from '../../assets/images/authcontainer/verification-progress.png'

class VerificationInProgress extends Component {
    render () {
        return (
            <Container className="verification-progress-container">
                <img src={VerificationInProgressImage} alt="Verification Image"/>
                <Label>Verification in progress</Label>
                <Label>We will check your account and will send you email</Label>
            </Container>
        )
    }
}

export default VerificationInProgress