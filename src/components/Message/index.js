import React, { Component } from 'react'
import { Col, Row, Label } from 'reactstrap'
import DashboardContainer from '../DashboardContainer'
import LeftJobComponent from './LeftJobComponent'
import MessagePanel from './MessagePanel'
import CandidateList from './CandidateList'
import './index.css'
import BackButton from '../../assets/images/message/back-button.png'

class Message extends Component {
    constructor(props) {
        super(props)
        this.onClickBack = this.onClickBack.bind(this)
        this.state = {
            isCandidateList: false
        }
    }
    onClickBack () {
        this.setState({
            isCandidateList: true
        })
    }
    renderItem () {
        if ( this.state.isCandidateList ) {
            return <CandidateList/>
        } else {
            return <MessagePanel/>
        }
    }
    renderTitle () {
        if ( this.state.isCandidateList ) {
            return <div className="back-list">
                        <Label>Candidate List</Label>
                    </div>
        } else {
            return <div className="back-list">
                        <img src={BackButton} alt="Back Button" onClick={this.onClickBack}/>
                        <Label>Back to Candidate list</Label>
                    </div>
        }
    }
    render () {
        return (
            <DashboardContainer isProfile={ true }>
                <div className="message-container">
                    <div className="message-left-panel">
                        <LeftJobComponent />
                        <LeftJobComponent />
                    </div>
                    <div className="message-right-panel">
                        { this.renderTitle()}
                        <div className="panel-container">
                            {this.renderItem()}
                        </div>
                        
                    </div>
                </div>
            </DashboardContainer>
        )
    }
}

export default Message