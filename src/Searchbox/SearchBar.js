import React from 'react'
import './SearchBox.css'
export default class SearchBar extends React.Component {
        render() {
            return ( 
            <div className="SearchBarContainer">
                <input
                placeholder="SearchBar"
                name="SearchBar"
                type="search"
                />
            <button>Search</button>
            </div>)
            }
        }