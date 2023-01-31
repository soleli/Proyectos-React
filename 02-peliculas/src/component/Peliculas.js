import PropTypes from 'prop-types';
function Peliculas(props) {
    let listaDeGeneros;
    if (props.generos != null) {
        listaDeGeneros = <ul>
            {props.generos.map((genero, i) => <li key={genero + i}>{genero}</li>)}
        </ul>
    }
    else {
        listaDeGeneros = "Sin genero"
    }
    return (
        <div className="Pelicula">
            <h2>{props.titulo}</h2>
            <p>{props.puntuacion}</p>
            <ul>
                {listaDeGeneros}
            </ul>
        </div>
    );

}

Peliculas.defaultProps = {
    titulo: "Titulo por defecto",
    puntuacion: 0,
    generos: ["Género por defecto"]
}
Peliculas.propTypes = {
    titulo: PropTypes.string,
    puntuacion: PropTypes.number,
    generos: PropTypes.array
}
export default Peliculas;