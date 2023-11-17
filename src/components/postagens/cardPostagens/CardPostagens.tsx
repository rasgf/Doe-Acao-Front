import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    post: Postagem
}

function CardPostagens({ post }: CardPostagensProps) {
    return (
        <div className='flex bg-white shadow-lg rounded-lg md:mx-auto my-56 max-w-md md:max-w-2xl'>

            <div className='flex items-start px-4 py-6'>
                <div className="flex items-center justify-between">
                    <img src={post.usuario?.foto} className='h-12 rounded-full'
                        alt="Imagem do Usuário" />
                    <h3 className='text-lg font-bold text-center uppercase'>{post.usuario?.nome}</h3>
                </div>
            </div>
            <div>

                <div className="flex">
                    <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-indigo-400 
                        hover:bg-indigo-800 flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-400 
                        hover:bg-red-700 w-full flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p>{post.conteudo}</p>
                    <p>Tema: {post.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(post.data))}</p>
                </div>
            </div>
        </div>
    )
}

export default CardPostagens