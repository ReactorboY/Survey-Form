import React, { Component } from 'react'
import {FirebaseContext} from '../firebase'

export default function SIgnUp() {
    console.log('Sign Up')
    return (
        <div className="flexy">
            <FirebaseContext.Consumer>
                {firebase => <SignUpForm firebase={firebase}/>}
            </FirebaseContext.Consumer>
        </div>
    )
}

class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div className="container flex-center">
                <form className="signup-form b flex-center">
                    <div className="signup-text">
                        <h2>Sign Up</h2>
                    </div>
                    <input type="text" placeholder="Enter Name" />
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                </form>
                <div className="signup-info b flex-center">
                    <h2>Sign up Form</h2>
                </div>
            </div>     
        )
    }
}
