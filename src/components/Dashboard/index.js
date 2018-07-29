import React, { Component } from 'react'
import DashboardContainer from '../DashboardContainer'
import SearchFilterBar from './SearchFilterBar'
import JobPositionComponent from './JobPositionComponent'

import './index.css'
const jobList = [
    {
        "id": 5,
        "title": "Rails dev",
        "address": null,
        "status_id": 1,
        "city": null,
        "status": "active",
        "created_date": "May 20, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    },
    {
        "id": 4,
        "title": "fsdjhfjk",
        "address": null,
        "status_id": 1,
        "city": null,
        "status": "active",
        "created_date": "April 30, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    },
    {
        "id": 3,
        "title": "Sr Software Engineer",
        "address": null,
        "status_id": 1,
        "city": "Karachi",
        "status": "active",
        "created_date": "April 29, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    },
    {
        "id": 2,
        "title": "Sr Software Engineer",
        "address": null,
        "status_id": 1,
        "city": "Isb",
        "status": "active",
        "created_date": "April 28, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    },
    {
        "id": 1,
        "title": "Jobezie",
        "address": null,
        "status_id": 1,
        "city": "Lahore",
        "status": "active",
        "created_date": "April 25, 18",
        "company": {
            "id": 1,
            "title": "Jobzone"
        },
        "skills": []
    }
]
class Dashboard extends Component {
    renderJobPositions = ( jobList ) => {
        const { apiLoading, searchCompany, searchJob, searchCandidate, searchApplied, searchDate } = this.props;
        console.log("****************", searchCompany)
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