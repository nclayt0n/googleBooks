import React from 'react'
import BookDetails from './BookDetails';
import './Book.css'
export default class Book extends React.Component{
    render(){
        console.log(this.props)
        let bookInfo=this.props.authors.map((author)=>{
           return(
             <div className="BookDetailsContainer">
                <div className="imageContainer">
                    <img src="https://bjwmartin.files.wordpress.com/2013/01/open_book_2.png" alt="Book"/>
                </div> 
                <div className="BookDets">
                    <ul>
                        <li>{author}</li>
                        <li>Price</li>
                        <li>Details</li>
                    </ul>
                </div>
            </div>) 
            })
        return(
        <div className="BookDetailsContainer">
         {bookInfo}
        </div>)
    }}
    