import React , { Component } from 'react'
import PinBox from 'react-pin-input'
import { Container, Col, Form, FormGroup, Row, Input, Label, Button } from 'reactstrap'
import BackButton from '../../assets/images/authcontainer/back-button.png'
import './index.css'

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
                    <Button>Resent Code</Button>
                    <img className="one-image-button" src={BackButton} alt="Back Button" />
                </div>
            </Container>
        )
    }
}

export default ThirdStep;