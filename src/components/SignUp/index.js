import React , { Component } from 'react'
import './index.css'
import AuthContainer from '../AuthContainer'
import BackgroundImage from '../../assets/images/authcontainer/auth-image-1.png';
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'
import VerificationInProgress from './VerificationInProgress'

class SingUp extends Component {

    renderStep = (currentStep) => {
        
        switch(currentStep) {
            case 1:
                return <AuthContainer BackgroundImage={BackgroundImage}><FirstStep {...this.props}/></AuthContainer>;
            case 2:
                return <AuthContainer BackgroundImage={BackgroundImage}><SecondStep {...this.props}/></AuthContainer>;
            case 3:
                return <AuthContainer BackgroundImage={BackgroundImage}><ThirdStep {...this.props}/></AuthContainer>;
            case 4:
                return <VerificationInProgress />
            default:
                return <span>Something went wrong!</span>;
        }
    }
    render () {
        const currentStep = this.props.signUpStep;
        return (
            <div>
                { this.renderStep( currentStep )}
            </div>
        )
    }
}

export default SingUp