import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
  
import './index.css'
import logo from '../../assets/images/header/logo.png'

class NLIHeader extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render () {
        return (
            <div className="nliheader-container">
                  <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img className="logo-image" src={logo} alt="logo image" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <NavLink className="nav-text" href="#">Why Jobzon</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-text" href="#">How It Works</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-text" href="/log-in">Sign In</NavLink>
                            </NavItem>
                            <NavItem className="background-gradient">
                                <NavLink className="nav-text button-gradient">Hire Workers</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NLIHeader;