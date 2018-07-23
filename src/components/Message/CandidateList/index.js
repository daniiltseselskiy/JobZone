import React, { Component } from 'react'
import CandidateCard from '../CandidateCard'
import './index.css'

class CandidateList extends Component {

    render () {
        const { changeMessagePanelStatus } = this.props
        return (
            <div className="candidate-list-container">
                <CandidateCard changeMessagePanelStatus = { changeMessagePanelStatus }/>
                <CandidateCard changeMessagePanelStatus = { changeMessagePanelStatus }/>
            </div>
        )
    }
}

export default CandidateList