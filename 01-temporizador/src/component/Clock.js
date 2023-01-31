import React from "react";
class Clock extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <h1>¡Hola Mundo!</h1>
                <h2>La hora es: {this.props.hora.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
export default Clock;