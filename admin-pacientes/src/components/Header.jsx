import logo from '../assets/images/logo.png'
const Header = () => {
    return (
        <div className="flex py-3">
            <div className='w-3/12 m-auto'>
                <img className="w-32 m-auto" src={logo} alt="" />
            </div>
            <div className='w-9/12 m-auto'>

            <h1 className="text-center py-5 text-2xl font-bold text-white">
                Administrador 
                <span className="text-indigo-300"> Veterinaria</span>
            </h1>
            </div>
        </div>
    )
}

export default Header

