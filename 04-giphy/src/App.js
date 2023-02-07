import './App.css';
import Gif from './components/Gif';
import Nav from './components/Nav';
import { Component } from 'react';

class App extends Component {
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
