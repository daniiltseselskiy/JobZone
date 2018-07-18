import React, { Component } from 'react'
import { connect } from 'react-redux'
import Job from '../../components/Job';
import {
    onChangeContent
} from '../../actions/job';
 

class JobContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <div className="job-page">
                <Job {...this.props} />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        currentTap: state.Job.currentTap
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeContent: currentTap => {
            dispatch(onChangeContent(currentTap));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobContainer);