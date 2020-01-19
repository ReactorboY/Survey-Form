import React, { Component } from 'react'

class Search extends Component {
    render() {
        const {children,value, onChange} = this.props
        return (
            <form>
            {children} <input
            type="text"
            value={value}
            onChange={onChange}
            />
        </form>
        )
    }
}

export default Search