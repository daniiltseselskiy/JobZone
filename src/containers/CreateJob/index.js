import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateJob from '../../components/Job/CreateJob' 

class CreateJobContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <div className="create-job-page">
                <CreateJob />
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
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateJobContainer);