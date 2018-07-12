import React, { Component } from 'react';
import Footer from '../../components/Footer'

class FooterContainer extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="footer">
                <Footer />
            </div>
        )
    }
}

export default FooterContainer;