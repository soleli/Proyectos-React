function Clock(props){
    return(
        <div>
            <h1>¡Hola Mundo!</h1>
            <h2>Son las {props.hora.toLocaleTimeString()}</h2>
        </div>
    );
}
export default Clock;