import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', "info")
        navigate('/login')
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
          <div className="relative  -mt-6  grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-rose-500 to-rose-600 bg-clip-border text-white shadow-lg shadow-pink-500/40">
          <div className="container flex justify-between text-lg ">
          <Link to='/home' className=' font-bold text-3xl hover:bg-rose-600 rounded-md border-white hover:border-2 px-2 hover'>Doe Ação</Link>
            
            <div className="flex gap-4 font-bold">
            
            
             <Link to='/temas' className='hover:bg-rose-600 rounded-md border-white hover:border-2 pr-2 pl-2 hover'>Temas</Link>
            <Link to='/cadastroTema' className='hover:bg-rose-600 rounded-md border-white hover:border-2 px-2 hover'>Cadastrar Tema</Link>
            <Link to='/postagens' className='hover:bg-rose-600 rounded-md border-white hover:border-2 px-2 hover'>Postagens</Link>
            <Link to='/perfil' className='hover:bg-rose-600 rounded-md border-white hover:border-2 px-2 hover'>Perfil</Link>
            <Link to='/sobre-nos' className='hover:bg-rose-600 rounded-md border-white hover:border-2 px-2 hover'>Sobre</Link>
            <Link to="" onClick={logout} className='hover:bg-rose-600 rounded-md border-white hover:border-2 px-2 hover'>Sair</Link>
                    </div>

                </div>
            </div>
        )

    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar