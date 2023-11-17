import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className=' bg-white shadow-lg rounded-lg py-8 px-24 max-w-md md:max-w-2xl'>
            <header className='text-lg font-semibold uppercase pb-4'>
             {tema.descricao}
            </header>

            <div className="flex">
                <Link to={`/editarTema/${tema.id}`}
                    className='rounded text-rose-500 
                    border-rose-500 font-bold border-solid border-2 py-2 px-4 mr-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarTema/${tema.id}`}
                    className='rounded text-rose-500 
                    border-rose-500 font-bold border-solid border-2 py-2 px-4'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas