import React, { Component } from 'react'
import {withFirebase} from './firebase'
import NewItem from './NewItem'

const ItemContainer = () => (
    <React.Fragment>
        <NewItem/>
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
        this.props.firebase.notes().doc(id).delete().then(() => console.log('Successfully Deleted'))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.props.firebase.notes().onSnapshot(serverUpdate => {
            const notes = serverUpdate.docs.map(_doc => {
                const data = _doc.data()
                data['id'] = _doc.id
                return data
            })
            this.setState({
                list: notes
            })
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