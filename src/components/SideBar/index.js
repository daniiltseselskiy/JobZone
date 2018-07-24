import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import './index.css'
import { Container, Label } from 'reactstrap'
import DashboardIcon from '../../assets/images/sidebar/dashboard-icon.png'
import DashboardColoredIcon from '../../assets/images/sidebar/dashboard-icon-colored.png'
import JobIcon from '../../assets/images/sidebar/job-icon.png'
import JobColoredIcon from '../../assets/images/sidebar/job-icon-colored.png'
import MessageIcon from '../../assets/images/sidebar/message-icon.png'
import MessageColoredIcon from '../../assets/images/sidebar/message-icon-colored.png'
import PostJobButton from '../../assets/images/homepage/post-job-button.png'


class SideBar extends Component {
    
    render () {
        const { isProfile, sideBarStatus, changeSideBarStatus, location } = this.props

        return (
            <div className="sidebar-container">
                <Container className={location.pathname === '/dashboard'? "sidebar-component active":"sidebar-component"}>
                    <Link to='/dashboard' onClick={() => changeSideBarStatus(1)}>
                        <img src={ location.pathname === '/dashboard' ? DashboardColoredIcon : DashboardIcon } alt="Dashboard Icon" />
                        <Label>Dashboard</Label>
                    </Link>
                </Container>
                <Container className={location.pathname === '/job'? "sidebar-component active":"sidebar-component"}>
                    <Link to='/job' onClick={() => changeSideBarStatus(2)}>
                        <img src={ location.pathname === '/job'? JobColoredIcon : JobIcon} alt="Job Icon" />
                        <Label>My Jobs</Label>
                    </Link>
                </Container>
                <Container className={location.pathname === '/message'? "sidebar-component active":"sidebar-component"}>
                    <Link to='/message' onClick={() => changeSideBarStatus(3)}>
                        <img src={ location.pathname === '/message' ? MessageColoredIcon : MessageIcon} alt="Message Icon" />
                        <Label>Message</Label>
                    </Link>
                </Container>
                { isProfile && <img className="post-image" src={ PostJobButton } alt="Post Job Button" />}
            </div>
        )
    }
}

export default withRouter(SideBar);