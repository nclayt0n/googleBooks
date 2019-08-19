import React from 'react'
import './Book.css'
import Book from './Book';
export default class BookList extends React.Component{

    render(){
        console.log(this.props)
         let books=this.props.books.map((item,idx)=>{
             console.log(item)
         return(
            <div key={idx}>
                <Book 
                author={item.author} 
                image={item.image} 
                title={item.title}
                price={item.price}
                description={item.description}
                />
            </div>)
         })
          
        return(
        <div className="BookList">
          {books}

        </div>)
    }
}