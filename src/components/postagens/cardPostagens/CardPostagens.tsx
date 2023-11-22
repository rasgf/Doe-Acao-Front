import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Curtir from '../curtirPostagem/CurtirPostagem'
import { Pencil, Trash } from '@phosphor-icons/react'

interface CardPostagensProps {
    post: Postagem
}

function CardPostagens({ post }: CardPostagensProps) {

    const { usuario} = useContext(AuthContext);

    return (
        <div className='flex flex-col bg-white shadow-lg rounded-lg md:mx-auto my-8 py-8 px-8 max-w-md md:max-w-2xl'>

            <div className='flex items-start py-6 justify-between w-full'>
                <div className="flex justify-between flex-col">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full">
                        <img src={post.usuario?.foto !== '' ? post.usuario?.foto : 'https://i.imgur.com/bRpa5Bk.jpg'}
                            className='object-cover w-full h-full'
                            alt="Imagem do Usuário" />
                    </div>
                    <h3 className='text-lg font-bold uppercase'>{post.usuario?.nome}</h3>
                </div>

                {post.usuario?.id === usuario.id ?
                    <div className="flex items-center gap-2">

                        <Link to={`/editarPostagem/${post.id}`} className='rounded text-gray-300 p-2 transition-all hover:text-rose-500 active:opacity-[0.85]'>
                            <button><Pencil size={24} weight='bold' /></button>
                        </Link>
                        <Link to={`/deletarPostagem/${post.id}`}
                            className='rounded text-gray-300 p-2 transition-all hover:text-rose-500 active:opacity-[0.85]'>
                            <button><Trash size={24} weight='bold' /></button>
                        </Link>
                    </div>
                    : null}
            </div>

        <div className='flex flex-col md:flex-row items-center gap-4'>

                {post.foto ?
                    <div className="w-full md:w-1/2">
                        <img src={post.foto} alt="Foto da postagem" className="w-full max-w-xs h-auto align-top" />
                    </div>
                    : null}

                <div className={`${post.foto ? 'w-full md:w-1/2' : 'w-full'}`}>

                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p className='text-sm text-gray-400'>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(post.data))}</p>
                    <p className='font-semibold text-rose-500'>Tema: {post.tema?.descricao}</p>
                    <p>{post.conteudo}</p>
                    <div className='flex justify-end'><Curtir /></div>
                </div>
            </div>
        </div>
    )
}

export default CardPostagens
