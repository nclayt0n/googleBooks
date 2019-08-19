import React from 'react'
import SearchBar from './SearchBar'
import FilterOptions from './FilterOptions'
import './SearchBox.css'


export default class SearchBox extends React.Component{
    render(){
        return(
            <div className="searchBox">
                <SearchBar/>
                <FilterOptions/>
            </div>
        )
    }
}