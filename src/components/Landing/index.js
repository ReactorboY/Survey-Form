import React from 'react'
import {useHistory} from 'react-router-dom'
import './landing.css'

const Landing = () => {
    let history = useHistory()

    function handleClick() {
      history.push('/signup')
    } 

  return  (
    <main>
        <div className="container">
            <h1 className="title">Todo<span>.now</span></h1>
            <p style={{textAlign:"end"}}>Simple Yet Productive</p>
        </div>
        <blockquote id="block" className="container">
            Manage Your life instead managing your todo <span>app</span>
        </blockquote>
        <div className="container">
            <button id="landing_button" onClick={handleClick}>let's Todo</button>
        </div>
    </main>
)}

export default Landing