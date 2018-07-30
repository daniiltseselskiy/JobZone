import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateJob from '../../components/Job/CreateJob' 
import {
    postJob,
} from '../../actions/job'
class CreateJobContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <div className="create-job-page">
                <CreateJob {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        postJob: item => {
            dispatch(postJob(item))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateJobContainer);