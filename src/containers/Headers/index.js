import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header'
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
                <Header />
            </div>
        )
    }
}

export default withRouter(HeaderContainer);