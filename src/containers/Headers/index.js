import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
    constructor (props) {
        super(props)
    }

    onChangeClassName = () => {
        return this.props.location.pathname.split("/").join(" ");
    }

    render () {
        const classname = this.onChangeClassName();

        return (
            <div className={`header${classname}`}>
                <Header {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.Auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));