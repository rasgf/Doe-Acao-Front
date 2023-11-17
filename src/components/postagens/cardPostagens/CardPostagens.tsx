import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    post: Postagem
}

function CardPostagens({ post }: CardPostagensProps) {
    return (
        <div className='flex flex-col bg-white shadow-lg rounded-lg md:mx-auto my-8 py-8 px-8 max-w-md md:max-w-2xl'>

            <div className='flex items-start px-4 py-6 justify-between w-full'>
                <div className="flex justify-between flex-col">
                    <img src={post.usuario?.foto} className='h-12 w-12 rounded-full mb-2'
                        alt="Imagem do Usuário" />
                    <h3 className='text-lg font-bold uppercase'>{post.usuario?.nome}</h3>
                </div>
                <div className="flex">
                    <Link to={`/editarPostagem/${post.id}`} className='rounded text-rose-500 
                                            border-rose-500 font-bold border-solid border-2 py-2 px-4 mr-2'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarPostagem/${post.id}`} className='rounded text-rose-500 
                                            border-rose-500 font-bold border-solid border-2 py-2 px-4'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
            <div>

                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p className='font-semibold'>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(post.data))}</p>
                    <p className='font-semibold'>Tema: {post.tema?.descricao}</p>
                    <p>{post.conteudo}</p>
                </div>
            </div>
        </div>
    )
}

export default CardPostagens