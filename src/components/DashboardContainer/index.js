import React, { Component } from 'react'
import { Container, Label } from 'reactstrap'
import SideBar from '../../containers/SideBar'
import './index.css'

class DashboardContainer extends Component {
    render () {
        const { isProfile } = this.props
        return (
            <div className="dashboard-container">
                <div className="sidebar-content">
                    <SideBar isProfile={ this.isProfile } /> 
                </div>
                <div className="content-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default DashboardContainer