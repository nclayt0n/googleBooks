import React from 'react';
import BookList from './BookList/BookList';
import SearchBox from './Searchbox/SearchBox';
import './app.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      books:'',
      searchTerm:''
    }
  } 
  updateSearchTerm=(term)=>{
    this.setState({
      searchTerm:term
    })
   this.fetch(term)
  }
  sortData=(responseJson)=>{
   let books= responseJson.items.map((item)=>{
     return {
      title:item.volumeInfo.title, 
      author:item.volumeInfo.authors?item.volumeInfo.authors:'none listed',
      image:item.volumeInfo.imageLinks.thumbnail,
      price: this.getPrice(item.saleInfo),
      description:item.volumeInfo.description
      };
   });
   this.setState({
     books:books
   })
  }

getPrice=(saleInfo)=>{
  if(saleInfo.saleability==='FOR_SALE'){
    return `${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}`;
  }else if(saleInfo.saleability==='NOT_FOR_SALE'){
    return 'Not for sale';
  }else if(saleInfo.saleability==='FREE'){
    return 'Free';
  }else{
    return 'Unknown';
  }}

  fetch=(term)=>{
    const url=`https://www.googleapis.com/books/v1/volumes?q=${term}`
    
    const options = {
      method: 'GET',
      headers: {
        "key": "AIzaSyBsuhc4M6bM4iKV1AnZTGNnBkue0JOrWkY",
        "Content-Type": "application/json"
      }
    };
    console.log(url);
    fetch(url,options)
    .then(response=> {
      if (response.ok){
      return response
    }
    throw new Error('Something went wrong');
    })
    .then(response=>response.json())
    .then(responseJson=>this.sortData(responseJson))
    .catch(err=> console.log(err.message))
  }
  
 
  render(){
    let mounted= this.state.books.length>1?<BookList  books={this.state.books}/>:null;
    console.log(this.state.searchTerm)
  return (
    <div className="App">
      <header className="App-header">
      <h1>Google Book Search</h1>
      </header>
      <SearchBox updateSearchTerm={this.updateSearchTerm}/>
      {mounted}
      
    </div>
  );
  }
}

export default App;
