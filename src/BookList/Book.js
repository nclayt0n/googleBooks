import React from 'react'
import BookDetails from './BookDetails';
import './Book.css'
export default class Book extends React.Component{
    render(){
        let titles=this.props.titles.map((title,idx)=>{
         return(
            <div key={idx}>
                <h2 >{title}</h2>
                
            </div>)
         })
        
        return(
        <div className="BookDetailsContainer">
         {titles}
         <BookDetails authors={this.props.authors} images={this.props.images} titles={this.props.titles}/>
        </div>)
    }}
    