import React , { Component } from 'react'
import { Container, Row , Col, Input, Label, Form, FormGroup } from 'reactstrap'
import { Link ,Redirect} from 'react-router-dom'
import './index.css'
import AuthContainer from '../AuthContainer'
import SignInButton from '../../assets/images/authcontainer/sign-in-button.png'
import BackgroundImage from '../../assets/images/authcontainer/auth-image.png';

class LogIn extends Component {
    constructor () {
        super ()
        this.state = {
            email: "",
            password: "",
            phone: "+14845084838",
            redirect: false,
        }
    }
    componentWillReceiveProps (nextProps) {
        this.setState({
            redirect: nextProps.isLoggedIn
        })
    }
    handleChangeEmail = (evt) => {
        this.setState({
            email: evt.target.value
        })
    }
    handleChangePassword = (evt) => {
        this.setState({
            password: evt.target.value
        })
    }
    SignIn = () => {
        const { signIn, isLoggedIn } = this.props
        // changeLoggedStatus()
        signIn(this.state)
    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/dashboard' />
        }
    }
    render () {
       
        return (
            <AuthContainer BackgroundImage={BackgroundImage}>
                {this.renderRedirect()}
                <Container className="login-container">
                    <Label className="label-top-title">Sign In</Label>
                    <Form>
                        <FormGroup>
                            <Input value={this.state.email} type="email" name="email" id="signupEmail" placeholder="Email" onChange={this.handleChangeEmail}/>
                        </FormGroup>
                        <FormGroup>
                            <Input value={this.state.password} type="password" name="password" id="signinPassword" placeholder="Password" onChange={this.handleChangePassword}/>
                        </FormGroup>                    
                        <FormGroup check>
                            <Link to="/forgotpassword">Forgot Password?</Link>
                        </FormGroup>
                        
                        <img className="one-image-button" src={ SignInButton } alt="Continue Button" onClick={this.SignIn}/>
                       
                    </Form>
                    <Label className="label-bottom-link">
                        Need an account?{' '}
                        <Link to="/sign-up">Sign Up</Link>
                    </Label>
                </Container>
            </AuthContainer>
        )
    }
}

export default LogIn