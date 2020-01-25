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
            <div className="scontainer flex-center">
                <form className="signup-form flex-center">
                    <div className="form-group" style={{justifySelf:"flex-start"}}>
                        <p style={{fontSize:"30px"}}>Sign Up</p>
                    </div>
                    <div className="form-group">
                        <div className="icon">
                            <i className="material-icons">
                            how_to_reg
                            </i>
                        </div>
                        <input type="text" placeholder="Enter Name" className="no-border bottom-border" />
                    </div>
                    <div className="form-group">
                        <div className="icon">
                            <i className="material-icons">
                            email
                            </i>
                        </div>
                        <input type="email" placeholder="Enter email" className="no-border bottom-border" />
                    </div>
                    <div className="form-group">
                        <div className="icon">
                            <i className="material-icons">
                            lock
                            </i>
                        </div>
                        <input type="password" placeholder="Enter password" className="no-border bottom-border" />
                    </div>
                    <div className="form-group">
                        <div style={{paddingBottom:"25px"}}>
                            <input type="checkbox" id="terms" name="terms"
                            defaultChecked/>
                            <label htmlFor="terms">I am agree to all terms & conditions</label>
                        </div>
                        <button className="submit-button" type="submit">Sign Up</button>
                    </div>
                </form>
                <div className="signup-info flex-center">
                    <div>Hussain</div>
                    <div>working</div>
                </div>
            </div>     
        )
    }
}
