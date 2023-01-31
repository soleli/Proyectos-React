import React from "react";
class Clock extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            hora:new Date()
        }
    }

    render(){
        return(
            <div>
                <h1>¡Hola Mundo!</h1>
                <h2>La hora es: {this.state.hora.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
export default Clock;