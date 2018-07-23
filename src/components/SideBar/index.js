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
        const { isProfile, sideBarStatus, changeSideBarStatus } = this.props
        return (
            <div className="sidebar-container">
                <Container className={sideBarStatus == 1? "sidebar-component active":"sidebar-component"}>
                    <Link to='/dashboard' onClick={() => changeSideBarStatus(1)}>
                        <img src={DashboardIcon} alt="Dashboard Icon" />
                        <Label>Dashboard</Label>
                    </Link>
                </Container>
                <Container className={sideBarStatus == 2? "sidebar-component active":"sidebar-component"}>
                    <Link to='/job' onClick={() => changeSideBarStatus(2)}>
                        <img src={JobIcon} alt="Job Icon" />
                        <Label>My Jobs</Label>
                    </Link>
                </Container>
                <Container className={sideBarStatus == 3? "sidebar-component active":"sidebar-component"}>
                    <Link to='/message' onClick={() => changeSideBarStatus(3)}>
                        <img src={MessageIcon} alt="Message Icon" />
                        <Label>Message</Label>
                    </Link>
                </Container>
                { isProfile && <img className="post-image" src={ PostJobButton } alt="Post Job Button" />}
            </div>
        )
    }
}

export default SideBar