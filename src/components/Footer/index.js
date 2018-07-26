import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom'
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
                        <a href="/" >
                            <h1 className="job-text">Job</h1><h3 className="zone-text">zone</h3>
                        </a>
                    </Container>
                    <Row>
                        <Col lg="4" md="6" xs="12" >
                            <p></p>
                            <p>Find and Follow us on</p>
                            <div className="follow-items">
                                <a href="https://www.instagram.com" target="blank"><img src={InstagramIcon} alt="Instagram" /></a>
                                <a href="https://www.facebook.com" target="blank"><img src={FacebookIcon} alt="Facebook" /></a>
                                <a href="https://www.twitter.com" target="blank"><img src={TwitterIcon} alt="Twitter" /></a>
                            </div>
                        </Col>
                        <Col lg="4" md="6" xs="12" >
                            <p>Download the app</p>
                            <a href="https://www.appstore.com" target="blank"><img src={AppstoreIcon} alt="Appstore" /></a>
                        </Col>
                        <Col lg="4" md="12" xs="12"  className="footer-text-col">
                            <div className="footer-text">
                                <Link to=""><p>About</p></Link>
                                <Link to=""><p>Terms of Service</p></Link>
                            </div>
                            <div className="footer-text">
                                <Link to=""><p>Language</p></Link>
                                <Link to=""><p>Privacy Policy</p></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;