import React, { Component } from 'react'
import DashboardContainer from '../DashboardContainer'
import SearchFilterBar from './SearchFilterBar'
import JobPositionComponent from './JobPositionComponent'

import './index.css'

class Dashboard extends Component {
    render () {
        return (            
        <DashboardContainer isProfile={ true }>
            <div className="dashboard-content">
                <SearchFilterBar />
                <div className="job-position-container">
                    <JobPositionComponent/>
                </div>
            </div>
        </DashboardContainer>
        )
    }
}

export default Dashboard