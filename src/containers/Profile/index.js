import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../components/Profile'
import {
    onOpenEditProfile,
    onOpenEditMember
} from '../../actions/profile';

class ProfileContainer extends Component {
    constructor (props) {
        super(props)
            
        this.state = {
           
        }
    }
    render () {
       
        return (
            <div className="profile-page">
                <Profile {...this.props} />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        isEditProfile: state.profile.isEditProfile,
        isEditMember: state.profile.isEditMember
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenEditProfile: () => {
            dispatch(onOpenEditProfile());
        },
        onOpenEditMember: () => {
            dispatch(onOpenEditMember());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);