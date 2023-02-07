import './App.css';
import Gif from './components/Gif';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row text-center">
          <Gif/>
        </div>
      </div>
    </div>
  );
}

export default App;
