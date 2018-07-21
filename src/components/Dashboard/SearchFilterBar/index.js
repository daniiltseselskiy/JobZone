import React, { Component } from 'react'
import DropdownMenuComponent from '../DropdownMenuComponent'
import './index.css'
class SearchFilterBar extends Component {
    
    render () {
        return (
            <div className="search-container">
                <DropdownMenuComponent />
                <DropdownMenuComponent />
                <DropdownMenuComponent />
                <DropdownMenuComponent />
                <DropdownMenuComponent />
            </div>
        )
    }
}

export default SearchFilterBar