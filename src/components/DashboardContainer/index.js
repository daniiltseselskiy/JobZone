import React, { Component } from 'react'
import { Container, Label } from 'reactstrap'
import SideBar from '../../containers/SideBar'
import './index.css'

class DashboardContainer extends Component {
    render () {
        const { isProfile } = this.props
        return (
            <Container className="dashboard-container">
                <Container className="sidebar-content">
                    <SideBar isProfile={ this.isProfile } /> 
                </Container>
                <Container className="content-container">
                    {this.props.children}
                </Container>
            </Container>
        )
    }
}

export default DashboardContainer