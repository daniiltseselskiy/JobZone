import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import './index.css';
import FriendCircleImage from '../../assets/images/homepage/friend-circle.png';
import JobSeekerImage from '../../assets/images/homepage/job-seeker-panel.png';
import BusinessImage from '../../assets/images/homepage/business-panel.png';
import FindZoneImage from '../../assets/images/homepage/find-zone.png';
import ManageZoneImage from '../../assets/images/homepage/manage-zone.png';
import InterviewZoneImage from '../../assets/images/homepage/interview-zone.png';
import FindJobImage from '../../assets/images/homepage/find-job-image.png';
import ScanJobImage from '../../assets/images/homepage/scan-job-image.png';
import ScheduleJobImage from '../../assets/images/homepage/schedule-job-image.png';
import WebsiteCircleImage from '../../assets/images/homepage/website-circle.png';
import FindJobButton from '../../assets/images/homepage/find-job-button.png';

class Homepage extends Component {
    render () {
        return (
            <Container className="home-page-container">
                <Row className="home-panel">
                    <Col lg="6" xs="12">
                        <div className="left-text">
                            <h1>Get matched with jobs around you</h1>
                            <p>Digital the job posting signs in your neighbourhood with QR sign</p>
                        </div>
                    </Col>
                    <Col lg="6" xs="12" className="right-image">
                        <img src={FriendCircleImage} alt="Friend Image" />
                    </Col>
                </Row>
                <Row className="home-job-panel">
                    <Col lg="6" xs="12" className="left-job-image">
                        <img src={JobSeekerImage} alt="Job Seeker Image" />
                        <img src={FindJobButton} alt="Find Job Button" />
                    </Col>
                    <Col lg="6" xs="12" className="right-business-image">
                        <img src={BusinessImage} alt=" Image" />
                        <img src={FindJobButton} alt="Find Job Button" />
                        <img src={WebsiteCircleImage} alt="Website Circle Image" />                        
                    </Col>
                </Row>
                <div className="why-jobzone-panel" id="whyjobzone">
                    <Container>
                        <h1>Why Jobzone</h1>
                    </Container>
                    <Row>
                        <Col lg="4" xs="12">
                            <img src={FindZoneImage} alt="FindZoneImage"/>
                            <h1>Find</h1>
                            <h3>Digital the job posting signs in your neighborhood with QR sign</h3>
                        </Col>
                        <Col lg="4" xs="12">
                            <img src={ManageZoneImage} alt="ManageZoneImage"/>
                            <h1>Manage</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .</h3>
                        </Col>
                        <Col lg="4" xs="12">
                            <img src={InterviewZoneImage} alt="InterviewZoneImage"/>
                            <h1>Interview</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h3>
                        </Col>
                    </Row>
                </div>
                <div className="how-it-works-panel" id="howitworks">
                    <Container>
                        <h1>How It Works</h1>
                    </Container>
                    <Row>
                        <Col lg="6">
                            <h1>Find jobs on the go</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                        </Col>
                        <Col lg="6">
                            <img src={FindJobImage} alt="Find Jobs Image" />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <img src={ScanJobImage} alt="Scan Jobs Image" />
                        </Col>
                        <Col lg="6">
                            <h1>Scan the jobs in your neighbourhood</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <h1>Auto Schedule the job interviews</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                        </Col>
                        <Col lg="6">
                            <img src={ScheduleJobImage} alt="Scan Jobs Image" />
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}

export default Homepage;