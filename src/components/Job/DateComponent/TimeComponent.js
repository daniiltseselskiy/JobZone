import React, { Component } from 'react'
import { Label, Input } from 'reactstrap'
import SaveButton from '../../../assets/images/job/save-button.png'

class TimeComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          checkboxState: false
        }
    }
    toggle(event) {
      this.setState({
        checkboxState: !this.state.checkboxState
      });
    }
    render () {
        return (
            <div className="time-content" >
                <Input type="checkbox" onClick={this.toggle.bind(this)}/>
                <Label className={this.state.checkboxState ? "empa" : "" }>9:00am - 10:00am</Label>
                {this.state.checkboxState && <img src={ SaveButton } alt="Save Button"/>}
            </div>
        )
    }

}

export default TimeComponent