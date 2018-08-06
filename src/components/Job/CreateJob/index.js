import React, { Component } from 'react'
import DashboardContainer from '../../DashboardContainer'
import CNJobCard from '../CNJobCard'
import './index.css'

class CreateJob extends Component {
    render () {
        return (
            <DashboardContainer isProfile = { false }>
                <CNJobCard {...this.props}/>
            </DashboardContainer>
        )
    }
}

export default CreateJob