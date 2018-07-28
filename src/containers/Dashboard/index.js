import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from '../../components/Dashboard'
import {
    getJobList
} from '../../actions/job'
import {
    getJobListService
} from '../../apis'

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
        
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getJobList: () => {
            dispatch(getJobList());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);