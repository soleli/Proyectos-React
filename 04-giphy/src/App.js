import './App.css';
import Gif from './components/Gif';
import Nav from './components/Nav';
import { Component } from 'react';
import SearchBar from './components/SeachBar';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      gifs:""
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
  }
  apiCall(url, consecuencia) {
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(err => console.log(err))
  }
  mostrarGif = (data) => {
    this.setState({
      gifs:data.data
    })
    console.log(this.state.gifs);
  }
  handleClick(){ 
    this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=nIq9C1NnwmZ3C3rYnVDbCT0M4bZAnyzN&tag=&rating=g", this.mostrarGif)
  }
  handleKeyPress(e){
    this.setState({
      gifs:""
    })
   let search=e.target.value;
   console.log(search)
   this.apiCall(`https://api.giphy.com/v1/gifs/search?api_key=nIq9C1NnwmZ3C3rYnVDbCT0M4bZAnyzN&q=${search}&limit=1000&offset=0&rating=g&lang=es`, this.mostrarGif)
   
  }
  componentDidMount() {
    this.apiCall("https://api.giphy.com/v1/gifs/trending?api_key=nIq9C1NnwmZ3C3rYnVDbCT0M4bZAnyzN&limit=100&rating=g", this.mostrarGif)
  }
  render() {
    return (
      <div>
        <Nav onClick={this.handleClick}/>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <SearchBar handleKeyPress={(e) => this.handleKeyPress(e)} />
            <Gif 
            gifs={this.state.gifs}/>
           
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
