import React from 'react'
import './Book.css'
import Book from './Book';
export default class BookList extends React.Component{

    render(){
         let books=this.props.titles.map((idx)=>{
         return(
            <div key={idx}>
                <Book 
                authors={this.props.authors} 
                images={this.props.images} 
                titles={this.props.titles}/>
            </div>)
         })
          
        return(
        <div className="BookList">
          {books}
          
        </div>)
    }
}