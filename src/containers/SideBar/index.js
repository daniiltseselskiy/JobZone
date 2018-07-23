import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideBar from '../../components/SideBar' 
import {
    changeSideBarStatus
} from '../../actions/sidebar'

class SideBarContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <div className="sidebar-page">
                <SideBar {...this.props}/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        sideBarStatus: state.SideBar.sideBarStatus
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSideBarStatus: sideBarStatus => {
            dispatch(changeSideBarStatus(sideBarStatus))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBarContainer);