import React, { Component } from 'react'
import ItemContainer from './ItemContainer'

const month = ['January', 'February','March','April','May','June','July','August','September','October','November','December']
const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

class DateContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date:new Date()
        }
    }
    render() {
        const {date} = this.state
        return (
            <React.Fragment>
            <div className="itemContainer">
                <div style={{flex:'80%'}}>
                    <span id="date">{date.getDate()}</span>
                    <div style={{display:'inline-block'}}>
                        <div>{month[date.getMonth()]}</div>
                        <div>{date.getFullYear()}</div>
                    </div>
                </div>
                <div style={{flex:'20%',alignSelf:'center', fontSize:'2rem'}}>
                    <span>{day[date.getDay()]}</span>
                    </div>
            </div>
            <ItemContainer/>
            </React.Fragment>
        )
    }
}

export default DateContainer