import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideBar from '../../components/SideBar' 
import { onChangeSidebarState } from '../../actions/sidebar'

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
        sidebarState: state.SideBar.sidebarState,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeSidebarState: sidebarState => {
            dispatch(onChangeSidebarState(sidebarState))
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBarContainer);