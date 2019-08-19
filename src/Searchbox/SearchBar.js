import React from 'react'
import './SearchBox.css'
export default class SearchBar extends React.Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.updateSearchTerm(e.target.searchBar.value)
    }
        render() {
            console.log(this.props.updateSearchTerm)
            return ( 
            <div className="SearchBarContainer">
            <form onSubmit={this.onSubmitForm}>
                <input
                placeholder="SearchBar"
                name="searchBar"
                type="search"

                />
            <button type='submit'>Search</button>
            </form>
            </div>)
            }
        }