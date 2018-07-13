import React , { Component } from 'react'
import { Container, Row , Col, Input } from 'reactstrap'
import PinBox from 'react-pin-input'
import BackButton from '../../assets/images/authcontainer/back-button.png'
import './index.css'
import AuthContainer from '../AuthContainer'
const Style = {
    padding: '10px',  
}
const InputStyle = {
    borderColor: '#dedede', 
    width: '102px', 
    height: '127px',
    margin: '10px'
}
class ForgotPassword extends Component {
    render () {
        return (
            <AuthContainer>
                <Container className="forgot-password-container">
                    <h1>Forgot Password</h1>
                    <div className="middle-container">
                        <p>We send to you  verify code to this number</p>
                        <p>+1 789 8976 987</p>
                        <PinBox
                            length={4} 
                            onChange={(value, index) => {}} 
                            type="numeric" 
                            // style={Style}  
                            // inputStyle={InputStyle}
                            inputFocusStyle={{borderColor: 'blue'}}
                            onComplete={(value, index) => {}}
                        />
                        <h5>00:30</h5>
                        <h6>Resent Code</h6>
                        <img src={BackButton} alt="Back Button" />
                    </div>
                </Container>
            </AuthContainer>
        )
    }
}

export default ForgotPassword