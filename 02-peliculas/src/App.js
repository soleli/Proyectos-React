import './App.css';
import Contador from './component/Contador';
import ContenedorPublicidad from './component/ContenedorPublicidad/ContenedorPublicidad';
import TiraPeliculas from './component/TiraPeliculas/TiraPeliculas';

function App() {
  return (
    <div>
      <Contador inicial={8}/>
      <ContenedorPublicidad>
        <h2>Aqui! Publicidad1!</h2>
      </ContenedorPublicidad>
      <TiraPeliculas />
      <ContenedorPublicidad>
        <h1>Aqui! Publicidad2!</h1>
      </ContenedorPublicidad>
      <TiraPeliculas />
      <TiraPeliculas />
    </div>
  );
}

export default App;
