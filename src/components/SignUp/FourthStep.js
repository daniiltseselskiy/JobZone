import React , { Component } from 'react'
import { Container, Col, Form, FormGroup, Row, Input, Label } from 'reactstrap'
import PinBox from 'react-pin-input'
import BackButton from '../../assets/images/authcontainer/back-button.png'
import ConfirmButton from '../../assets/images/authcontainer/confirm-button.png'
class FourthStep extends Component {
    render () {
        return (
            <Container className="verification-code-container">
                <h1>Apply Verify Code</h1>
                <div className="middle-container">
                    <PinBox
                        length={4} 
                        onChange={(value, index) => {}} 
                        type="numeric" 
                        inputFocusStyle={{borderColor: 'blue'}}
                        onComplete={(value, index) => {}}
                    />
                    <Container className="stepper-container">
                        <img src={BackButton} alt="Back Button" />
                        <img src={ ConfirmButton } alt="Confirm Button" />
                    </Container>
                </div>
            </Container>
        )
    }
}

export default FourthStep;