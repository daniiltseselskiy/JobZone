import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import { Container, Label } from 'reactstrap'
import DashboardIcon from '../../assets/images/sidebar/dashboard-icon.png'
import JobIcon from '../../assets/images/sidebar/job-icon.png'
import MessageIcon from '../../assets/images/sidebar/message-icon.png'
import PostJobButton from '../../assets/images/homepage/post-job-button.png'

class SideBar extends Component {
    render () {
        const { isProfile, onChangeSidebarState, sidebarState } = this.props
        return (
            <Container className="sidebar-container">
                <Container className="sidebar-component">
                    <Link to='/dashboard'>
                        <img src={DashboardIcon} alt="Dashboard Icon"/>
                        <Label>Dashboard</Label>
                    </Link>
                </Container>
                <Container className="sidebar-component">
                    <Link to='/job'>
                        <img src={JobIcon} alt="Job Icon"/>
                        <Label>My Jobs</Label>
                    </Link>
                </Container>
                <Container className="sidebar-component">
                    <Link to='/message'>
                        <img src={MessageIcon} alt="Message Icon"/>
                        <Label>Message</Label>
                    </Link>
                </Container>
                { isProfile && <img className="post-image" src={ PostJobButton } alt="Post Job Button" />}
            </Container>
        )
    }
}

export default SideBar