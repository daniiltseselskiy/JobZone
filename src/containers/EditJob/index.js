import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditJob from '../../components/Job/EditJob' 

class EditJobContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <div className="edit-job-page">
                <EditJob />
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
)(EditJobContainer);