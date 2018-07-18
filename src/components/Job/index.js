import React, { Component } from 'react'
import { Container, Label } from 'reactstrap'
import SideBar from '../SideBar'
import JobCard from './Card'
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
                <Container className="job-content">
                        <Container className="mark-container">
                            <Container className="mark-content">
                                <img src={ MarkOpenJob } alt="Mark Background Image" />
                                <Label>1</Label>
                            </Container>
                            <Container className="mark-content">
                                <img src={ MarkDraft } alt="Mark Background Image" />
                                <Label>0</Label>
                            </Container>
                            <Container className="mark-content">
                                <img src={ MarkExpired } alt="Mark Background Image" />  
                                <Label>0</Label>
                            </Container>
                        </Container>
                        <Container className="main-container">
                            {/* <JobCard /> */}
                            <JobDetail {...this.props} />
                        </Container>
                    </Container>
            </DashboardContainer>
        )
    }
}

export default Job