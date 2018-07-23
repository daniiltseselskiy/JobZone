import React , { Component } from 'react'
import { Container } from 'reactstrap'
import NLIHeader from './NLIHeader'
import LIHeader from './LIHeader'

class Header extends Component {
    renderHeader = (isLoggedIn) => {
        const { changeLoggedStatus } = this.props
        if ( isLoggedIn ) {
            return <LIHeader changeLoggedStatus={changeLoggedStatus}/>
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