import { Component } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

class Gif extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        let contenido;
        if ((this.props.gifs).length > 1) {
            contenido = this.props.gifs.map((gif,i) =>

                <img key={i} src={gif.images.original.url} alt="" style={{width: "100%", display: "block"}} />

            )
        }
        else if ((this.props.gifs)) {
            contenido = <div className="col-lg-12 col-md-6 mb-4" key={this.props.gifs.id}>
                <div className="card h-100">
                    <img className="card-img-top" src={this.props.gifs.images.original.url} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.gifs.title}</h4>
                    </div>
                </div>
            </div>
        }
        else {
            contenido = <h1>Cargandoo...</h1>
        }
        return (

                <Masonry>
                    {contenido}
                </Masonry>




        )
    }
}

export default Gif;