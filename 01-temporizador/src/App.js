import Clock from "./component/Clock";


function App() {
  return (
    <div>
      <Clock hora={new Date()}/>
    </div>
  );
}

export default App;
