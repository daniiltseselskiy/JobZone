import React , { Component } from 'react'
import './index.css'
import PinBox from 'react-pin-input'
import { Container, Col, Form, FormGroup, Row, Input, Label } from 'reactstrap'
import BackButton from '../../assets/images/authcontainer/back-button.png'
class ThirdStep extends Component {
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
                    <h5>00:30</h5>
                    <h6>Resent Code</h6>
                    <img className="one-image-button" src={BackButton} alt="Back Button" />
                </div>
            </Container>
        )
    }
}

export default ThirdStep;