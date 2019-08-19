import React from 'react'
import './Book.css'
import Book from './Book';
export default class BookList extends React.Component{

    render(){
         let titles=this.props.titles.map((title,idx)=>{
         return(
            <div key={idx}>
                <h2 >{title}</h2>
                
            </div>)
         })
          
        return(
        <div className="BookList">
          {titles}
          <Book authors={this.props.authors} images={this.props.images}/>
        </div>)
    }
}