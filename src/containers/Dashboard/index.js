import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from '../../components/Dashboard'
import {
    getJobList,
    changeSearchApplied,
    changeSearchCompany,
    changeSearchJob,
    changeSearchDate,
    changeSearchCandidate,
} from '../../actions/job'

class DashboardContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    componentDidMount() {
        
        const { getJobList } = this.props;
        getJobList();
        
    }
    // render Function.
    render () {
        return (
            <div className="dashboard-page">
                <Dashboard {...this.props} />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        jobList: state.Job.jobList,
        apiLoading: state.Job.apiLoading,
        errors: state.Job.errors,
        searchCompany: state.Job.searchCompany,
        searchJob: state.Job.searchJob,
        searchCandidate: state.Job.searchCandidate,
        searchApplied: state.Job.searchApplied,
        searchDate: state.Job.searchDate,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getJobList: () => {
            dispatch(getJobList());
        },
        changeSearchApplied: applied => {
            dispatch(changeSearchApplied(applied))
        },
        changeSearchCompany: company => {
            dispatch(changeSearchCompany(company))
        },
        changeSearchCandidate: candidate => {
            dispatch(changeSearchCandidate(candidate))
        },
        changeSearchJob: job => {
            dispatch(changeSearchJob(job))
        },
        changeSearchDate: date => {
            dispatch(changeSearchDate(date))
        },

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);