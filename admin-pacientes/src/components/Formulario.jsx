
const Formulario = () => {
    return (
        <div className="md:w-1/3 px-5 py-10 h-screen">
            <p className="text-white text-center text-2xl font-bold">Seguimiento de Pacientes</p>
            <p className="text-indigo-300 italic text-center mb-10 text-md"> Añade Pacientes y Administralos</p>
            <form>
                <div className="mb-6">
                    <label htmlFor="mascota" className="block text-white uppercase">
                     Nombre de Mascota
                    </label>
                    <input 
                        id="mascota"
                        type="text"
                        placeholder="Ingrese el nombre de la mascota"
                        className="w-full block focus:shadow-md p-2 mt-2 rounded-md text-indigo-900 focus:ring-4 ring-indigo-300" 
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="propietario" className="block text-white uppercase">
                     Nombre del propietario
                    </label>
                    <input 
                        id="propietario"
                        type="text"
                        placeholder="Ingrese el nombre del propietario"
                        className="w-full block focus:shadow-md p-2 mt-2 rounded-md text-indigo-900 focus:ring-4 ring-indigo-300" 
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="telefono" className="block text-white uppercase">
                     Teléfono
                    </label>
                    <input 
                        id="telefono"
                        type="text"
                        placeholder="Ingrese el número de teléfono"
                        className="w-full block focus:shadow-md p-2 mt-2 rounded-md text-indigo-900 focus:ring-4 ring-indigo-300" 
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="fecha" className="block text-white uppercase">
                     Fecha 
                    </label>
                    <input 
                        id="fecha"
                        type="date"
                        placeholder="Ingrese el número de teléfono"
                        className="w-full block focus:shadow-md p-2 mt-2 rounded-md text-indigo-900 focus:ring-4 ring-indigo-300" 
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="sintomas" className="block text-white uppercase">
                     Sintomas 
                    </label>
                    <textarea 
                        id="sintomas"
                        type="date"
                        placeholder="Describe los sintomas"
                        className="w-full block focus:shadow-md p-2 mt-2 rounded-md text-indigo-900 focus:ring-4 ring-indigo-300" 
                    />
                </div>
                <input 
                type="submit"
                className="bg-lime-500 p-2 font-bold uppercase rounded-xl text-indigo-900 w-full"
                />
            </form>
        </div>
    )
}

export default Formulario