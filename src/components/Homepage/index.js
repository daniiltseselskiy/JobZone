import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import './index.css';
import FriendCirclImage from '../../assets/images/homepage/friend-circle.png';

class Homepage extends Component {
    render () {
        return (
            <div className="home-page-container">
                <Row>
                    <Col lg="6" xs="12">
                        <div className="left-text">
                            <h1>Get matched with jobs around you</h1>
                            <p>Digital the job posting signs in your neighbourhood with QR sign</p>
                        </div>
                    </Col>
                    <Col lg="6" xs="12" className="right-image">
                        <img src={FriendCirclImage} alt="Friend Image" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Homepage;