function Peliculas(props) {
    return (
        <div className="Pelicula">
            <h2>{props.titulo}</h2>
            <p>{props.puntuacion}</p>
            <ul>
                {props.generos.map((genero,i)=><li key={genero+i}>{genero}</li>)}
                
            </ul>
        </div>
    );

}
export default Peliculas;