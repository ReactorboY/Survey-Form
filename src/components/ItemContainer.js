import React, { Component } from 'react'

const list = [
    {
        title:'Add list',
        id:0
    },
    {
        title:'Delete item from list',
        id:1
    },
    {
        title: 'Update todo item',
        id:2
    },
    {
        title:'Improve the design',
        id:3
    }, {
        title: 'Improve the design',
        id: 4
    }, {
        title: 'Improve the design',
        id: 5
    }, {
        title: 'ove the design',
        id: 6
    }
]

export default class ItemContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list,
        }
    }
    render() {
        const {list} = this.state
        return (
            <div className="itemContainer" style={{display:'block'}}>
                {list.map(item => 
                    <div key={item.id} className="item">
                        <div className="flexBig">{item.title}</div>
                        <button type="button" className="dismiss">
                            DONE
                        </button>
                    </div>    
                )}
            </div>
        )
    }
}
