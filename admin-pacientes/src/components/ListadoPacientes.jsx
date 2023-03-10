import Paciente from "./Paciente"

const ListadoPacientes = () => {
    return (
        <div className="md:w-2/3 bg-indigo-100 py-10 rounded-t-3xl shadow-2xl ">
            <p className="text-indigo-800 text-center text-2xl font-bold">Listado de Pacientes</p>
            <p className="text-indigo-300 italic text-center mb-10 text-md"> Administra Pacientes y Citas</p>
            <div className="grid md:grid-cols-2 gap-2 h-screen overflow-y-scroll">
                <Paciente/>
                <Paciente/>
                <Paciente/>
                <Paciente/>
                <Paciente/>
                <Paciente/>

            </div>
            
        </div>
    )
}

export default ListadoPacientes