import React from 'react'
import SearchBar from './SearchBar'
import FilterOptions from './FilterOptions'
import './SearchBox.css'


export default class SearchBox extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className="searchBox">
                <SearchBar updateSearchTerm={this.props.updateSearchTerm}/>
                <FilterOptions/>
            </div>
        )
    }
}