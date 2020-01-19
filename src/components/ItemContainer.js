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

class ItemContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list,
        }
        this.onDismiss = this.onDismiss.bind(this)
    }

    onDismiss = id => {
        const updatedList = this.state.list.filter(item => item.id !== id)
        this.setState({ list: updatedList})
    }

    render() {
        const {list} = this.state
        return (
            <div className="itemContainer" style={{display:'block'}}>
                {list.map(item => 
                    <div key={item.id} className="item">
                        <div className="flexBig">{item.title}</div>
                        <button onClick={() => this.onDismiss(item.id)} type="button" className="dismiss">
                            <i className="material-icons">delete_sweep</i>
                        </button>
                    </div>    
                )}
            </div>
        )
    }
}

export default ItemContainer