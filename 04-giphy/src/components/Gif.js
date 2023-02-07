import { Component } from 'react';

class Gif extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        let contenido;
        if ((this.props.gifs).length>1) {
            contenido = this.props.gifs.map((gif) =>
                <div className="col-lg-3 col-md-6 mb-4" key={gif.id}>
                    <div className="card h-100">
                        <img className="card-img-top" src={gif.images.original.url} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">{gif.title}</h4>
                            </div>
                    </div>
                </div>
            )
        }
        else {
            contenido = <h1>Cargandoo...</h1>
        }
        return (

            <div className='row text-center'>
                {contenido}
            </div>



        )
    }
}

export default Gif;