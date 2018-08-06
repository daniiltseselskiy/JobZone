import React, { Component } from 'react'
import NotificationItem from './NotificationItem'
import { Link } from 'react-router-dom'
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import './index.css'
import {
    Navbar,
    NavbarBrand,
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
        this.toggle1 = this.toggle1.bind(this)
        this.state = {
            dropdownOpen: false,
            dropdownOpen1: false,
            itemsNotification: [
                {
                    avatar: UserIcon,
                    message: "I am a message",
                    time: "5 min"
                },
                {
                    avatar: UserIcon,
                    message: "I am a message",
                    time: "5 min"
                }
            ]
        }
    }
    
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }
    toggle1() {
        this.setState(prevState => ({
          dropdownOpen1: !prevState.dropdownOpen1
        }));
    }

    renderItem = (itemsNotification) => {
        return itemsNotification.map(
            (item, index) => {
                return (
                    <div key={index}>
                        <NotificationItem 
                        item={item}
                    />
                    </div>
                )
            }
        )
    }
    onLogout = () => {
        const { changeLoggedStatus} = this.props
        changeLoggedStatus()
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
                            <Link to="/profile"><DropdownItem>Profile</DropdownItem></Link>
                            <Link to="/setting"><DropdownItem>Settings</DropdownItem></Link>
                            <Link to="/"><DropdownItem onClick={this.onLogout}>Log Out</DropdownItem></Link>
                        </DropdownMenu>
                    </Dropdown>
                    
                    <Dropdown isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                        <DropdownToggle
                            tag="span"
                            data-toggle="dropdown"
                        >
                            <img src={NotificationIcon} alt="avatar icon" />
                        </DropdownToggle>
                        <DropdownMenu right className="dropdown-menu notification">
                            {this.renderItem(this.state.itemsNotification)}
                        </DropdownMenu>
                    </Dropdown>
                </Navbar>
            </Container>
        ) 
    }
}

export default LIHeader