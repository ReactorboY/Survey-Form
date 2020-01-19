import React, { Component } from 'react'
import ItemContainer from './ItemContainer'

export default class DateContainer extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="itemContainer">
                <div style={{flex:'80%'}}>
                    <span id="date">12</span>
                    <div style={{display:'inline-block'}}>
                        <div>July</div>
                        <div>2019</div>
                    </div>
                </div>
                <div style={{flex:'20%',alignSelf:'center', fontSize:'2rem'}}>
                    <span>Friday</span>
                    </div>
            </div>
            <ItemContainer/>
            </React.Fragment>
        )
    }
}
