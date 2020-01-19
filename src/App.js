import React, { Component } from 'react'
import TodoContainer from './components/TodoContainer'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <main>
       <TodoContainer/>
      </main>  
    )
  }
}

export default App