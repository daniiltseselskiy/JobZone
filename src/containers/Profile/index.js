import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from '../../components/Profile'
import {
    onOpenEditProfile,
    onOpenEditMember,
    getProfile,
    editProfile,
    editMember,
} from '../../actions/profile';

class ProfileContainer extends Component {
    constructor (props) {
        super(props)
            
        this.state = {
           
        }
    }
    componentDidMount() {
        const { getProfile } = this.props
        getProfile();
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
        isEditProfile: state.Profile.isEditProfile,
        isEditMember: state.Profile.isEditMember,
        isLoading: state.Profile.isLoading,
        profile: state.Profile.profile,
        errors: state.Profile.errors,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenEditProfile: () => {
            dispatch(onOpenEditProfile());
        },
        onOpenEditMember: () => {
            dispatch(onOpenEditMember());
        },
        getProfile: () => {
            dispatch(getProfile());
        },
        editProfile: (item) => {
            dispatch(editProfile(item))
        },
        editMember: (item) => {
            dispatch(editMember(item));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);