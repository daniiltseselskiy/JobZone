import React, { Component } from 'react'
import CandidateCard from '../CandidateCard'
import './index.css'

class CandidateList extends Component {
    render () {
        return (
            <div className="candidate-list-container">
                <CandidateCard />
                <CandidateCard />
            </div>
        )
    }
}

export default CandidateList