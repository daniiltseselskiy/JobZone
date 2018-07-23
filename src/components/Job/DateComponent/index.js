import React, { Component } from 'react'
import { Label, Input } from 'reactstrap'
import './index.css'
import BackArrow from '../../../assets/images/job/back-arrow.png'
import NextArrow from '../../../assets/images/job/next-arrow.png'
import Timecomponent from './TimeComponent'
import Slider from "react-slick";
class DateComponent extends Component {
    
    render () { 
        return (
            <div className="date-container">
                <div className="days-container">
                    <Slider
                        infinite={false}
                        speed={100}
                        arrows={false}
                        slidesToShow={7}
                        slidesToScroll={1}
                        centerMode={false}
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
                        <div className="day-content">
                            <Label>Sun</Label>
                            <Label>July1</Label>
                        </div>
                        <div className="day-content">
                            <Label>Mon</Label>
                            <Label>July2</Label>
                        </div>
                    </Slider>
                </div>
                <div className="time-container">
                    <Timecomponent />
                    <Timecomponent />
                    <Timecomponent />
                    <Timecomponent />
                    <Timecomponent />
                </div>
            </div>
        )
    }
}

export default DateComponent