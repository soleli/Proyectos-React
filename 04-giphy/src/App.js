import './App.css';
import Gif from './components/Gif';
import Nav from './components/Nav';
import { Component } from 'react';

class App extends Component {

  apiCall(url, consecuencia) {
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(err => console.log(err))
  }
  mostrarGif = (data) => {
    console.log(data);
  }
  componentDidMount() {
    this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=nIq9C1NnwmZ3C3rYnVDbCT0M4bZAnyzN&tag=&rating=g", this.mostrarGif)
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row text-center">
            <Gif />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
