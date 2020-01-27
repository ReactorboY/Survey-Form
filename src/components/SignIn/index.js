import React, { Component } from 'react'
import {withFirebase} from '../firebase'
import * as ROUTES from '../constants/routes'
import {withRouter, Link} from 'react-router-dom'

const SignIn = () => (
        <div className="flexy">
            <SignInClass/>        
        </div>
)

const INITIAL_STATE = {
    email:'',
    password:'',
    error:null
}

class SignInFormBase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...INITIAL_STATE
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = e => {
        const {email, password} = this.state
        e.preventDefault()
        this.props.firebase.dosignInUser(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE})
                this.props.history.push(ROUTES.HOME)
            }).catch(error => {
                this.setState({error})
            })
    }

    googleSignIn = () => {
        this.props.firebase.googleSignIn()
            .then(result => {
                this.setState({
                    user: result,
                    ...INITIAL_STATE
                })
                this.props.history.push(ROUTES.HOME)
            }).catch(e => console.log(e))
    }

    githubSignIn = () => {
        this.props.firebase.githubSignIn()
            .then(result => {
                if (result.credential) {}
            }).catch(e => console.log(e))
    }

    render() {
        const {email,password,error} = this.state
        const isInvalid = email === '' || password === ''
        return (
            <div className="scontainer flex-center">
                <div className="signup-form flex-center">
                    <form onSubmit={this.onSubmit} style={{width:"80%"}}>
                        <div className="form-group" style={{justifySelf:"flex-start"}}>
                            <p style={{fontSize:"30px"}}>Sign In</p>
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
                            <button disabled={isInvalid} className="submit-button" type="submit">Sign In</button>
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
                    <p>Have an account ? <Link to="/signup">Sign Up</Link></p>
                </div>
                {error && <p style={{width:"80%",fontSize:"15px",border:"1px solid #e32249",padding:"10px"}}>{error.message}</p>}
            </div>
            <div className="signup-info flex-center">
            </div>
        </div>
        )
    }
}

const SignInClass = withRouter(withFirebase(SignInFormBase))

export default SignIn

