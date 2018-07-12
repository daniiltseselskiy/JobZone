import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import './index.css';
import InstagramIcon from '../../assets/images/footer/instagram-icon.png'
import FacebookIcon from '../../assets/images/footer/facebook-icon.png'
import TwitterIcon from '../../assets/images/footer/twitter-icon.png'
import AppstoreIcon from '../../assets/images/footer/appstore-icon.png'

class Footer extends Component {
    render () {
        return (
            <div className="footer-container">
                <Container className="footer-body">
                    <Container className="logo-text">
                        <a href="#" >
                            <h1 className="job-text">Job</h1><h3 className="zone-text">zone</h3>
                        </a>
                    </Container>
                    <Row>
                        <Col lg="4" md="6" xs="12" >
                            <p></p>
                            <p>Find and Follow us on</p>
                            <div className="follow-items">
                                <img src={InstagramIcon} alt="Instagram" />
                                <img src={FacebookIcon} alt="Facebook" />
                                <img src={TwitterIcon} alt="Twitter" />
                            </div>
                        </Col>
                        <Col lg="4" md="6" xs="12" >
                            <p>Download the app</p>
                            <img src={AppstoreIcon} alt="Appstore" />
                        </Col>
                        <Col lg="4" md="12" xs="12"  className="footer-text-col">
                            <div className="footer-text">
                                <p>About</p>
                                <p>Terms of Service</p>
                            </div>
                            <div className="footer-text">
                                <p>Language</p>
                                <p>Privacy Policy</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;