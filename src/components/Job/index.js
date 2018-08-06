import React, { Component } from 'react'
import DashboardContainer from '../DashboardContainer'
import './index.css'
import JobDetail from './JobDetail'
import MarkOpenJob from '../../assets/images/job/mark-open-job.png'
import MarkDraft from '../../assets/images/job/mark-draft.png'
import MarkExpired from '../../assets/images/job/mark-expired.png'

class Job extends Component {
    render () {
        return (
            <DashboardContainer isProfile={ false }>
                <div className="job-content">
                        <div className="mark-container">
                            <div className="mark-content active">
                                <img src={ MarkOpenJob } alt="Mark Background Image" />
                                <Label>1</Label>
                            </div>
                            <div className="mark-content">
                                <img src={ MarkDraft } alt="Mark Background Image" />
                                <Label>0</Label>
                            </div>
                            <div className="mark-content">
                                <img src={ MarkExpired } alt="Mark Background Image" />  
                                <Label>0</Label>    
                            </div>
                        </div>
                        <div className="main-container">
                            {/* <JobCard /> */}
                            <JobDetail {...this.props} />
                        </div>
                    </div>
            </DashboardContainer>
        )
    }
}

export default Job