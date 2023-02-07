import './App.css';
import Gif from './components/Gif';
import Nav from './components/Nav';
import { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      gifs:[]
    }
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
  componentDidMount() {
    this.apiCall("https://api.giphy.com/v1/gifs/trending?api_key=nIq9C1NnwmZ3C3rYnVDbCT0M4bZAnyzN&limit=25&rating=g", this.mostrarGif)
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row text-center">
            <Gif gifs={this.state.gifs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
