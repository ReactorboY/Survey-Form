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
            name:'',
            email:'',
            password:'',
            user:''
        }
    }

    onSubmit = e => {
        e.preventDefault()
        const {email, password} = this.state
        this.props.firebase.docreateUser(email,password).then(data => console.log(data)).catch(e =>  console.log(e))
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    googleSignIn = () => {
        this.props.firebase.googleSignIn()
            .then(result => {
                console.log(result)
                this.setState({
                    user:result,
                    name:'',
                    password:'',
                    email:''
                })
            }).catch(e => console.log(e))
    }

    githubSignIn = () => {
        this.props.firebase.githubSignIn()
            .then(result => {
                if (result.credential) {
                    let token = result.credential.accessToken;
                    console.log(token)
                }
            }).catch(e => console.log(e))
    }

    render() {
        const {name, email, password} = this.state
        const isInvalid = name === '' || email === '' || password === '' 
        return (
            <div className="scontainer flex-center">
                <div className="signup-form flex-center">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group" style={{justifySelf:"flex-start"}}>
                            <p style={{fontSize:"30px"}}>Sign Up</p>
                        </div>
                        <div className="form-group">
                            <div className="icon">
                                <i className="material-icons">
                                how_to_reg
                                </i>
                            </div>
                            <input type="text" name="name" onChange={this.onChange} value={name} placeholder="Enter Name" className="no-border bottom-border" />
                        </div>
                        <div className="form-group">
                            <div className="icon">
                                <i className="material-icons">
                                email
                                </i>
                            </div>
                            <input type="email" name="email" onChange={this.onChange} value={email} placeholder="Enter email" className="no-border bottom-border" />
                        </div>
                        <div className="form-group">
                            <div className="icon">
                                <i className="material-icons">
                                lock
                                </i>
                            </div>
                            <input type="password" name="password" onChange={this.onChange} value={password} placeholder="Enter password" className="no-border bottom-border" />
                        </div>
                        <div className="form-group">
                            <div style={{paddingBottom:"25px"}}>
                                <input type="checkbox" id="terms" name="terms"
                                defaultChecked/>
                                <label htmlFor="terms">I am agree to all terms & conditions</label>
                            </div>
                            <button disabled={isInvalid} className="submit-button" type="submit">Sign Up</button>
                    </div>
                </form>
                <div style={{marginTop:"1rem"}}>
                    <button className="social-button" onClick={this.googleSignIn}>
                        <img src="/img/search.svg" alt="google sign in"/>
                    </button>
                    <button className="social-button" onClick={this.githubSignIn}>
                        <img src="/img/github.svg" alt="Github Sign in" style={{width:"100%",height:"100%"}}/>
                    </button>
                </div>
            </div>
            <div className="signup-info flex-center">
            </div>
        </div>     
        )
    }
}
