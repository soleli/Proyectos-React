import { Component } from "react";

class Gif extends Component{

    constructor(props){
        super(props);
        this.state={
            url:""
        }
    }

    render(){
        let contenido;
        if(this.state.url==""){
            contenido=<p>Cargando...</p>
        }
        else{
            contenido=<img src={this.state.url}/>
        }
        return(
            <div>
                {contenido}
            </div>
        )
    }
}

export default Gif;