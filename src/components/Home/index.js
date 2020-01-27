import React from 'react'
import {withAuthorization} from '../Session'

const Home = props => {
    const onClickk = e => {
        props.firebase.doSignOut()
    }
    return (
        <div className="flexy">
            <div className="scontainer flex-center">
                <h1>Hi</h1>
                <button onClick={onClickk}>Signout</button>
            </div>
        </div>
    )
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Home)