import { Component } from "react";

class Contador extends Component{
    constructor(props){
        super(props);
        this.state={
            numero:props.inicial
        }
    }
    render(){
        return(
            <h2>{this.state.numero}</h2>
        )
    }
}

export default Contador;