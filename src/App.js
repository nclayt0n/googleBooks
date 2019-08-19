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
      images:''
    }
  } 
  sortData=(responseJson)=>{
    console.log(responseJson)

    let authors= responseJson.items.map((item)=>item.volumeInfo.authors);
    let data=responseJson.items
   for(let i=0;i<data.length;i++){
      if(authors[i]===undefined){
        authors[i]="none listed"
      }
   };
  let titles= responseJson.items.map((item)=>item.volumeInfo.title);
  let images= responseJson.items.map((item)=>item.volumeInfo.imageLinks.thumbnail);
   this.setState({
     authors:authors,
     titles:titles,
     images:images
   })
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
    console.log(this.state)
    let mounted= this.state.authors.length>1?<BookList authors={this.state.authors} titles={this.state.titles} images={this.state.images}/>:null;
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
