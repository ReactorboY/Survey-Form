import React from 'react'
import './landing.css'

const Landing = () => (
    <main>
        <div className="container">
            <h1>Todo<span>.now</span></h1>
            <p style={{textAlign:"end"}}>Simple Yet Productive</p>
        </div>
        <div className="container" style={{width:"40%",maxWidth:"340px"}}>
            <blockquote>Manage Your life instead managing your todo <span>app</span>
            </blockquote>
        </div>
        <div className="container">
            <button id="landing_button">let's Todo</button>
        </div>
    </main>
)

export default Landing