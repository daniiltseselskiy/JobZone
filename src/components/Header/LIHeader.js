import React, { Component } from 'react'
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import './index.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    InputGroup,
    InputGroupAddon,
    Label,
} from 'reactstrap';
import logo from '../../assets/images/header/logo.png'
import SearchIcon from '../../assets/images/header/search-icon.png'
import UserIcon from '../../assets/images/header/user-icon.png'
import NotificationIcon from '../../assets/images/header/notification-icon.png'

class LIHeader extends Component {
    constructor (props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            dropdownOpen: false
        }
    }
    
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render () {
        return (
            <Container className="liheader-container">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img className="logo-image" src={logo} alt="logo image" /></NavbarBrand>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <img src={SearchIcon} alt="search"/>
                        </InputGroupAddon>
                        <Input type="search" placeholder="Find employee" />
                    </InputGroup>
                    <Label>
                        Hello, Name
                    </Label>
                    
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle
                            tag="span"
                            data-toggle="dropdown"
                        >
                            <img src={UserIcon} alt="avatar icon" />
                        </DropdownToggle>
                        <DropdownMenu right className="dropdown-menu">
                            <DropdownItem>Profile</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                            <DropdownItem>Log Out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <div><img src={NotificationIcon} alt="avatar icon" /></div>
                </Navbar>
            </Container>
        ) 
    }
}

export default LIHeader