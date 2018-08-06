import React, { Component } from 'react'
import DropdownMenuComponent from 'react-dropdown'
import 'react-dropdown/style.css'
import './index.css'
class SearchFilterBar extends Component {
    
    changeSearchCompany = (event) => {
        const { changeSearchCompany } = this.props
        changeSearchCompany(event.value);
    }
    render () {
        // const { changeSearchCompany , changeSearchJob, changeSearchCandidate, changeSearchApplied, changeSearchDate } = this.props
        const options = [
            ['Jobzone', 'Upwork', 'Freelancer'],
            ['one', 'two', 'three'],
            ['one', 'two', 'three'],
            ['one', 'two', 'three'],
            ['one', 'two', 'three'],
        ]
        return (
            <div className="search-container">
                <DropdownMenuComponent options={options[0]} onChange={this.changeSearchCompany} placeholder="Company"/>
                <DropdownMenuComponent options={options[1]} onChange={this._onSelect} placeholder="Job"/>
                <DropdownMenuComponent options={options[2]} onChange={this._onSelect} placeholder="Candidate"/>
                <DropdownMenuComponent options={options[3]} onChange={this._onSelect} placeholder="Applied"/>
                <DropdownMenuComponent options={options[4]} onChange={this._onSelect} placeholder="Date"/>
            </div>
        )
    }
}

export default SearchFilterBar