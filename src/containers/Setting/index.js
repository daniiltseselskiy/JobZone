import React, { Component } from 'react'
import { connect } from 'react-redux'
import Setting from '../../components/Setting' 

class SettingContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }
    render () {
        return (
            <div className="setting-page">
                <Setting />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingContainer);