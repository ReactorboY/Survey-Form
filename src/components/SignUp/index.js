import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import {withFirebase} from '../firebase'
import * as ROUTES from '../constants/routes'

const SignUp = () => {
    return (
        <div className="flexy">
            <SignUpForm/>
        </div>
    )
}

const INITIAL_STATE = {
    name:'',
    email:'',
    password:'',
    user:''
}

class SignFormBase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...INITIAL_STATE
        }
    }

    onSubmit = e => {
        e.preventDefault()
        const {email, password} = this.state
        this.props.firebase.docreateUser(email,password).then(data => {
            console.log(data)
            this.setState({
                ...INITIAL_STATE
            })
            this.props.history.push(ROUTES.HOME)
        }).catch(e =>  console.log(e))
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    googleSignIn = () => {
        this.props.firebase.googleSignIn()
            .then(result => {
                this.setState({
                    user:result,
                    ...INITIAL_STATE
                })
                this.props.history.push(ROUTES.HOME)
            }).catch(e => console.log(e))
    }

    githubSignIn = () => {
        this.props.firebase.githubSignIn()
            .then(result => {
                if (result.credential) {
                }
            }).catch(e => console.log(e))
    }

    render() {
        const {name, email, password} = this.state
        const isInvalid = name === '' || email === '' || password === '' 
        return (
            <div className="scontainer flex-center">
                <div className="signup-form flex-center">
                    <form onSubmit={this.onSubmit} style={{width:"80%"}}>
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
                <div style={{padding:"20px 0"}}>
                    <p>Have an account ? <Link to="/signin">Sign In</Link></p>
                </div>
            </div>
            <div className="signup-info flex-center">
            </div>
        </div>     
        )
    }
}

const SignUpForm = withRouter(withFirebase(SignFormBase))

export default SignUp