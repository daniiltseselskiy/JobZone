import React, { Component } from 'react'
// import DropdownMenuComponent from '../DropdownMenuComponent'
import DropdownMenuComponent from 'react-dropdown'
import 'react-dropdown/style.css'
import './index.css'
class SearchFilterBar extends Component {
  
    render () {
        const options = [
            'one', 'two', 'three'
        ]
        return (
            <div className="search-container">
                <DropdownMenuComponent options={options} onChange={this._onSelect} placeholder="Company"/>
                <DropdownMenuComponent options={options} onChange={this._onSelect} placeholder="Job"/>
                <DropdownMenuComponent options={options} onChange={this._onSelect} placeholder="Candidate"/>
                <DropdownMenuComponent options={options} onChange={this._onSelect} placeholder="Applied"/>
                <DropdownMenuComponent options={options} onChange={this._onSelect} placeholder="Date"/>
            </div>
        )
    }
}

export default SearchFilterBar