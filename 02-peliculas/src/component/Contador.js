import { Component } from "react";

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: props.inicial
        }
    }
    incrementar(){
        this.setState(
            {
                numero:this.state.numero+1
            }
        )
    }
    render() {
        return (
            <div>
                <h2>{this.state.numero}</h2>
                <button onClick={()=>this.incrementar()}>Incrementar</button>
            </div>

        )
    }
}

export default Contador;