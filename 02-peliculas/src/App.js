import './App.css';
import ContenedorPublicidad from './component/ContenedorPublicidad';
import TiraPeliculas from './component/TiraPeliculas';

function App() {
  return (
    <div>
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
