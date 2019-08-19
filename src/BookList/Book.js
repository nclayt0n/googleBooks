import React from 'react'
import './Book.css'
export default class Book extends React.Component{
    render(){
        return(
        <div className="BookDetailsContainer">
             <div className="Book">
            <h2>{this.props.title}</h2>
              <div className="imageContainer">
                    <img src={this.props.image} alt="Book"/>
                </div> 
                <div className="BookDets">
                    <ul>
                        <li>author: {this.props.author}</li>
                        <li>price: {this.props.price}</li>
                        <li>{this.props.description}</li>
                    </ul>
                </div>
            </div>
        </div>)
    }}
    