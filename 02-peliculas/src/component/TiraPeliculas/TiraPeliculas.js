import Peliculas from "../Peliculas/Peliculas";
import { Component } from "react";
class TiraPeliculas extends Component {
    lanzarAlerta(){
        alert('¡hiciste click!')
    }
    cambiarAmarillo(){
        document.querySelector("body").style.background="yellow"
    }
    cambiarRosa(){
        document.querySelector("body").style.background="pink"
    }
    render() {
        return (
            <div onClick={this.lanzarAlerta} onMouseOver={this.cambiarAmarillo} onMouseOut={this.cambiarRosa}>
                <Peliculas titulo="Inception" puntuacion="8.0" generos={["Ciencia ficción", "Thriller", "Intriga", "Acción"]} />
                <Peliculas titulo="Avatar " puntuacion="7.2" generos={["Ciencia ficción", "Aventuras"]} />
                <Peliculas titulo="Joker" puntuacion="8.0" generos={["Thriller", "Drama"]} />
                <Peliculas titulo="The Dark Knight" puntuacion="8.1" generos={["Thriller", "Drama", "Acción"]} />
                <Peliculas />


            </div>
        )
    }
}

export default TiraPeliculas;