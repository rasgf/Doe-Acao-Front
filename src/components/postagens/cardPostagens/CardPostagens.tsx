import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import Curtir from '../curtirPostagem/CurtirPostagem'
import { GithubLogo, Pencil, Trash } from '@phosphor-icons/react'

interface CardPostagensProps {
    post: Postagem
}

function CardPostagens({ post }: CardPostagensProps) {
    return (
        <div className='flex flex-col bg-white shadow-lg rounded-lg md:mx-auto my-8 py-8 px-8 max-w-md md:max-w-2xl'>

            <div className='flex items-start py-6 justify-between w-full'>
                <div className="flex justify-between flex-col">
                    <img src={post.usuario?.foto} className='h-12 w-12 rounded-full mb-2'
                        alt="Imagem do Usuário" />
                    <h3 className='text-lg font-bold uppercase'>{post.usuario?.nome}</h3>
                </div>
                    <div>   </div>
                <div className="flex items-center gap-2">

                    <Link to={`/editarPostagem/${post.id}`} className='rounded text-gray-300 p-2 transition-all hover:text-rose-500 active:opacity-[0.85]'>
                        <button><Pencil size={24} weight='bold' /></button>
                    </Link>
                    <Link to={`/deletarPostagem/${post.id}`}
                    className='rounded text-gray-300 p-2 transition-all hover:text-rose-500 active:opacity-[0.85]'>
                        <button><Trash size={24} weight='bold'/></button>
                    </Link>
                </div>


                
               
            </div>
            <div>

                <div className='py-4 gap-2'>
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p className='text-sm text-gray-400'>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(post.data))}</p>
                    <p className='font-semibold text-rose-500'>Tema: {post.tema?.descricao}</p>
                    <p>{post.conteudo}</p>
                    <div className='a'><Curtir/></div>
                </div>
            </div>
        </div>
    )
}

export default CardPostagens