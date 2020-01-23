import React, { Component } from 'react'
import {FirebaseContext} from '../firebase'

export default function SIgnUp() {
    console.log('Sign Up')
    return (
        <div>
            <h1>SignUp</h1>
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
            email:'',
            password:'',
            error:[]
        }
    }

    onSubmit = e => {
        e.preventDefault()
        console.log('çlicked')
        // const {email,password} = this.state
        // this.props.firebase.docreateUser(email,password)
        //     .then(authUser => {
        //         this.setState({
        //             email:'',
        //             password:''
        //         })
        //     }).catch(e => console.log(e))
        this.props.firebase.g().then((result) => {
            console.log(result)
        }).catch((err) => {
            
        });
           
    }

    onChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        const {error,email, password} = this.state
        const isInvalid = password === '' || email === '' 
        return (
            <form onSubmit={this.onSubmit}>
                {error && 
                <div>{error}
                    </div>}
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
            <button type="submit" disabled={isInvalid}>Sign Up</button>
        </form>
        )
    }
}
