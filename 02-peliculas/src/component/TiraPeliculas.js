import Peliculas from "./Peliculas";

function TiraPeliculas(){
    return(
        <div>
            <Peliculas titulo="Inception" puntuacion="8.0" generos={["Ciencia ficción","Thriller","Intriga","Acción"]}/>
            <Peliculas titulo="Avatar " puntuacion="7.2" generos={["Ciencia ficción","Aventuras"]}/>
            <Peliculas titulo="Joker" puntuacion="8.0" generos={["Thriller","Drama"]}/>
            <Peliculas titulo="The Dark Knight" puntuacion="8.1" generos={["Thriller","Drama","Acción"]}/>
            <Peliculas/>
         
            
        </div>
    )
}

export default TiraPeliculas;