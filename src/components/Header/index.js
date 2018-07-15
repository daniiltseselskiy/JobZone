import React , { Component } from 'react'
import { Container } from 'reactstrap'
import NLIHeader from './NLIHeader'
import LIHeader from './LIHeader'

class Header extends Component {
    renderHeader = (isLoggedIn) => {
        if ( isLoggedIn ) {
            return <LIHeader />
        } else {
            return <NLIHeader />
        }
    }
    render () {
        const { isLoggedIn } = this.props
        console.log(isLoggedIn)
        return (
            <Container className="header-container">
                {this.renderHeader(isLoggedIn)}
            </Container>
        )
    }
}

export default Header