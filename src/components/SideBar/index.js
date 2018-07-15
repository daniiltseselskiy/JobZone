import React, { Component } from 'react'
import './index.css'
import { Container, Label } from 'reactstrap'
import DashboardIcon from '../../assets/images/sidebar/dashboard-icon.png'
import JobIcon from '../../assets/images/sidebar/job-icon.png'
import MessageIcon from '../../assets/images/sidebar/message-icon.png'
import PostJobButton from '../../assets/images/homepage/post-job-button.png'

class SideBar extends Component {
    render () {
        return (
            <Container className="sidebar-container">
                <Container className="sidebar-component">
                    <img src={DashboardIcon} alt="Dashboard Icon" />
                    <Label>Dashboard</Label>
                </Container>
                <Container className="sidebar-component">
                    <img src={JobIcon} alt="Job Icon" />
                    <Label>My Jobs</Label>
                </Container>
                <Container className="sidebar-component">
                    <img src={MessageIcon} alt="Message Icon" />
                    <Label>Message</Label>
                </Container>
                <img className="post-image" src={ PostJobButton } alt="Post Job Button" />
            </Container>
        )
    }
}

export default SideBar