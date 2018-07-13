import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../../components/Footer'

class FooterContainer extends Component {
    constructor (props) {
        super(props)
    }

    onChangeClassName = () => {
        return this.props.location.pathname.split("/").join(" ");
    }

    render () {
        const classname = this.onChangeClassName();
        return (
            <div className={`footer${classname}`}>
                <Footer />
            </div>
        )
    }
}

export default withRouter(FooterContainer);