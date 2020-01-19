import React, { Component } from 'react'
import './App.css'

const DEFAULT_QUERY = 'react'
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:null
    }
    this.onDismiss = this.onDismiss.bind(this)
    this.setSearchTopStories = this.setSearchTopStories.bind(this)
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedHits = this.state.list.filter(isNotId);
    this.setState({
      list: updatedHits
    });
  }

  setSearchTopStories = result => this.setState({list:result})

  componentDidMount() {
    fetch(`${url}`)
      .then(res =>  res.json())
      .then(result => this.setSearchTopStories(result.hits))
      .catch(e => console.log(e))
  }

  render() {
    const {list} = this.state
    if (!list) return null
    return (
      <div className="table">
                {list.map(item => 
                    <div key={item.objectID} className="table-row">
                        <span style={{ width: '40%' }}>
                        <a href={item.url}>{item.title}</a>
                        </span>
                        <span style={{ width: '30%' }}>
                        {item.author}
                        </span>
                        <span style={{ width: '10%' }}>
                        {item.num_comments}
                        </span>
                        <span style={{ width: '10%' }}>
                        {item.points}
                        </span>
                        <span style={{ width: '10%' }}>
                        <button
                            onClick={() => this.onDismiss(item.objectID)}
                            className="button-inline"
                        >
                            Dismiss
                        </button>
                        </span>
                    </div>    
                )}
            </div>
    )
  }
}

export default App