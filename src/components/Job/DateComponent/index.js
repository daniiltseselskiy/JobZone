import React, { Component } from 'react'
import { Label, Input } from 'reactstrap'
import './index.css'
import BackArrow from '../../../assets/images/job/back-arrow.png'
import NextArrow from '../../../assets/images/job/next-arrow.png'
import SaveButton from '../../../assets/images/job/save-button.png'
import Slider from "react-slick";

class DateComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            checkStatus: [false, false, false, false, false]
        }
    }
    changeStaus = (checkBox, i) => {
        const items = this.state.checkStatus
        items[i] = false
        console.log(checkBox.checked)
        if (checkBox.checked) {
            
            items[i] = true
        }
        this.setState({
            checkStatus: items
        })
        console.log(this.state.checkStatus)
    } 
    render () { 
        return (
            <div className="date-container">
                <div className="days-container">
                    <Slider
                        infinite={true}
                        speed={100}
                        arrows={false}
                        slidesToShow={5}
                        slidesToScroll={1}
                        centerMode={true}
                        arrows={true}
                        prevArrow={<div className="arrow-content"><img src={BackArrow} alt="Back Arrow"/></div>}
                        nextArrow={<div className="arrow-content"><img src={NextArrow} alt="Next Arrow"/></div>}
                    >
                        <div className="day-content">
                            <Label>Mon</Label>
                            <Label>Jun25</Label>
                        </div>
                        <div className="day-content">
                            <Label>Tue</Label>
                            <Label>Jun26</Label>
                        </div>
                        <div className="day-content">
                            <Label>Wed</Label>
                            <Label>Jun27</Label>
                        </div>
                        <div className="day-content">
                            <Label>Thu</Label>
                            <Label>Jun28</Label>
                        </div>
                        <div className="day-content">
                            <Label>Fri</Label>
                            <Label>Jun29</Label>
                        </div>
                        <div className="day-content">
                            <Label>Sat</Label>
                            <Label>Jun30</Label>
                        </div>
                    </Slider>
                </div>
                <div className="time-container">
                    <div className="time-content" >
                        <Input type="checkbox" onChange={() => this.changeStaus(this, 0)}/>
                        <Label>9:00am - 10:00am</Label>
                        <img src={ SaveButton } alt="Save Button"/>
                    </div>
                    <div className="time-content">
                        <Input type="checkbox" onClick={() => this.changeStaus(this, 1)}/>
                        <Label>9:00am - 10:00am</Label>
                        <img src={ SaveButton } alt="Save Button"/>
                    </div>
                    <div className="time-content">
                        <Input type="checkbox" onClick={() => this.changeStaus(this, 2)}/>
                        <Label>9:00am - 10:00am</Label>
                        <img src={ SaveButton } alt="Save Button"/>
                    </div>
                    <div className="time-content">
                        <Input type="checkbox" onClick={() => this.changeStaus(this, 3)}/>
                        <Label>9:00am - 10:00am</Label>
                        <img src={ SaveButton } alt="Save Button"/>
                    </div>
                    <div className="time-content">
                        <input type="checkbox" onClick={() => this.changeStaus(this, 4)}/>
                        <Label>9:00am - 10:00am</Label>
                        <img src={ SaveButton } alt="Save Button"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DateComponent