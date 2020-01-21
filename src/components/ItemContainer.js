import React, { Component } from 'react'
import {withFirebase} from './firebase'

const ItemContainer = () => (
    <React.Fragment>
        <ItemComponent/>
    </React.Fragment>
)

class ItemClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
        this.onDismiss = this.onDismiss.bind(this)
    }

    onDismiss = id => {
        const updatedList = this.state.list.filter(item => item.id !== id)
        this.setState({ list: updatedList})
    }

    componentDidMount() {
        this.props.firebase.notes().get().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data())
            console.log(data)
            this.setState({list:data})
        })
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

const ItemComponent = withFirebase(ItemClass)

export default ItemContainer