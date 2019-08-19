import React from 'react'
import './Book.css'
export default class BookDetails extends React.Component{
    render(){
        let author=this.props.authors.map(a=>{
            return(<div>
              <div className="imageContainer">
                    <img src="https://bjwmartin.files.wordpress.com/2013/01/open_book_2.png" alt="Book"/>
                </div> 
                <div className="BookDets">
                    <ul>
                        <li>{a}</li>
                        <li>Price</li>
                        <li>Details</li>
                    </ul>
                </div></div>
        )
        })
        
           return(<div>
              {author}</div>
        )
        
    }
}