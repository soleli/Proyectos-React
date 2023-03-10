
const ListadoPacientes = () => {
    return (
        <div className="md:w-2/3 bg-indigo-100 py-10 rounded-t-3xl shadow-2xl ">
            <p className="text-indigo-800 text-center text-2xl font-bold">Listado de Pacientes</p>
            <p className="text-indigo-300 italic text-center mb-10 text-md"> Administra Pacientes y Citas</p>
           
            <div className="bg-white md:w-1/2 p-5 m-5 rounded-xl shadow-xl">
                <p className="font-bold text-indigo-800">
                    Nombre:{' '}
                    <span className="text-black font-normal">Teodoro</span>
                </p>
                <p className="font-bold text-indigo-800">
                    Propietario:{' '}
                  <span className="text-black font-normal">Soledad Alaniz</span>
                </p>
                <p className="font-bold text-indigo-800">
                    Teléfono:{' '}
                    <span className="text-black font-normal">3804296826</span>
                </p>
                <p className="font-bold text-indigo-800">
                    Fecha:{' '}
                    <span className="text-black font-normal">10-03-2023</span>
                </p>
                <p className="font-bold text-indigo-800">
                    Sintomas:{' '}
                    <span className="text-black font-normal text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos culpa ex, error nemo quidem nihil velit cupiditate vitae et, accusamus laboriosam. Laborum ratione reprehenderit placeat culpa reiciendis nulla fugiat?</span>
                </p>
            </div>
        </div>
    )
}

export default ListadoPacientes