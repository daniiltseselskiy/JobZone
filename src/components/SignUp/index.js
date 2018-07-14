import React , { Component } from 'react'
import './index.css'
import AuthContainer from '../AuthContainer'
import BackgroundImage from '../../assets/images/authcontainer/auth-image-1.png';
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'

class SingUp extends Component {

    renderStep = (currentStep) => {
        console.log(currentStep);
        switch(currentStep) {
            case 1:
                return <FirstStep />;
            case 2:
                return <SecondStep />;
            case 3:
                return <ThirdStep />;
            case 4:
                return <FourthStep />;
            default:
                return <FirstStep />
        }
    }
    render () {
        console.log('****************', this.props.signUpStep);
        const currentStep = this.props.signUpStep;
        return (
            <AuthContainer BackgroundImage={BackgroundImage}>
                { this.renderStep( currentStep )}
            </AuthContainer>
        )
    }
}

export default SingUp