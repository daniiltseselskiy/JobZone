import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditJob from '../../components/Job/EditJob' 
import {
    editJob,
} from '../../actions/job'
class EditJobContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <div className="edit-job-page">
                <EditJob {...this.props}/>
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
        editJob: item => {
            dispatch(editJob(item))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditJobContainer);