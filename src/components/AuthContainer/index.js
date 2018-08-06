import React, {Component } from 'react'
import './index.css'
import { Container, Row , Col } from 'reactstrap'
import LogoImage from '../../assets/images/header/logo.png'

class AuthContainer extends Component {
    render () {
        const {BackgroundImage } = this.props;
        
        return (
            <Container className="auth-container">
                <Row>
                    <Col lg="6" className="left-logo-image">
                        <img src={ LogoImage } alt="Logo Images" />
                        {this.props.children}
                    </Col>
                    <Col lg="6" className="right-auth-image" style={{ backgroundImage: `url(${BackgroundImage})` }} />
                </Row>
            </Container>
        )
    }
}

export default AuthContainer