import React, { Component } from 'react'
import DashboardContainer from '../DashboardContainer'
import SearchFilterBar from './SearchFilterBar'
import JobPositionComponent from './JobPositionComponent'

import './index.css'

class Dashboard extends Component {
    renderJobPositions = ( jobList ) => {
        const { apiLoading, searchCompany, searchJob, searchCandidate, searchApplied, searchDate } = this.props;
       
        return jobList.map( (item, index) => {
            if (searchCompany !== null && searchCompany !== item.company.title ) {
                return false
            }
            return <div key={index}>
                        <JobPositionComponent
                            item={item}
                        />
                    </div>
        })
    }
    render () {
        const { jobList } = this.props
        
        return (            
        <DashboardContainer isProfile={ true }>
            <div className="dashboard-content">
                <SearchFilterBar {...this.props}/>
                <div className="job-position-container">
                    {this.renderJobPositions(jobList)}
                </div>
            </div>
        </DashboardContainer>
        )
    }
}

export default Dashboard