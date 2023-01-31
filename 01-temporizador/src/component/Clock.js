function Clock(){
    return(
        <div>
            <h1>¡Hola Mundo!</h1>
            <h2>Son las {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}
export default Clock;