import React from 'react';
import BookList from './BookList/BookList';
import SearchBox from './Searchbox/SearchBox';
import './app.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      authors:'',
      titles:'',
      images:'',
      books:''
    }
  } 
  sortData=(responseJson)=>{
    console.log(responseJson.items)
    let authors= responseJson.items.map((item)=>item.volumeInfo.authors);
    let data=responseJson.items
   for(let i=0;i<data.length;i++){
      if(authors[i]===undefined){
        authors[i]="none listed"
      }
   };
  let titles= responseJson.items.map((item)=>item.volumeInfo.title);
  let images= responseJson.items.map((item)=>item.volumeInfo.imageLinks.thumbnail);
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
     authors:authors,
     titles:titles,
     images:images,
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
  }

}

  componentDidMount(){
    const searchTerm="flowers+inauthor"
    const url=`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    const options = {
      method: 'GET',
      headers: {
        "key": "AIzaSyBsuhc4M6bM4iKV1AnZTGNnBkue0JOrWkY",
        "Content-Type": "application/json"
      }
    };
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
    let mounted= this.state.authors.length>1?<BookList authors={this.state.authors} titles={this.state.titles} images={this.state.images} books={this.state.books}/>:null;
    console.log(this.state.books)
  return (
    <div className="App">
      <header className="App-header">
      <h1>Google Book Search</h1>
      </header>
      <SearchBox/>
      {mounted}
      
    </div>
  );
  }
}

export default App;
