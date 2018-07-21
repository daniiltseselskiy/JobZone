import React, { Component } from 'react'
import { Label } from 'reactstrap'
import DashboardContainer from '../DashboardContainer'
import './index.css'
import QRImage from '../../assets/images/setting/qr-icon.png'
import DownloadImage from '../../assets/images/setting/download-icon.png'
import ShareImage from '../../assets/images/setting/share-icon.png'
import NextImage from '../../assets/images/setting/next-icon.png'

class Setting extends Component {
    render () {
        return (
            <DashboardContainer isProfile={ false }>
                <div className="setting-container">
                    <div className="setting-content">
                        <img src={QRImage} alt="QR Image"/>
                        <div className="download-share-content">
                            <img src={DownloadImage} alt="Download Image"/>
                            <img src={ShareImage} alt="Share Image" />
                        </div>
                        <div className="setting-text-container">
                            <Label>Profile Settings</Label>
                            <img src={NextImage} alt="Next Image" />                    
                        </div>
                        <div className="setting-text-container">
                            <Label>Notification Settings</Label>
                            <img src={NextImage} alt="Next Image" />                    
                        </div>
                        <div className="signout-container">
                            <Label>Sign Out</Label>
                        </div>
                    </div>
                </div>
            </DashboardContainer>
        )
    }
}

export default Setting