import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Curtir from '../curtirPostagem/CurtirPostagem'
import { Pencil, Trash } from '@phosphor-icons/react'
import Comentarios from '../comentarios/Comentarios';

interface CardPostagensProps {
    post: Postagem
}

function CardPostagens({ post }: CardPostagensProps) {

    const { usuario } = useContext(AuthContext);

    // Inicia o campo de Comentarios com um Comentário Genérico
    const [comentarios, setComentarios] = useState([
        ''
    ])

    // State que usaremos para pegar o texto dos novos Comentários
    const [novoComentarioTexto, setNovoComentarioTexto] = useState('')

    // Função que vai pegar os novos comentários digitados e adiciona ao State
    function criarNovoComentario(event: FormEvent) {
        event.preventDefault()
        setComentarios([...comentarios, novoComentarioTexto])
        setNovoComentarioTexto('')
    }

    // Função que pega o texto do novo comentário
    function atualizarNovoComentario(event: ChangeEvent<HTMLTextAreaElement>) {
        setNovoComentarioTexto(event.target.value)
    }


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

                    <h4 className='font-bold'>{post.titulo}</h4>
                    <p className='text-sm text-gray-400'>{new Intl.DateTimeFormat(undefined, {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                    }).format(new Date(post.data))}</p>
                    <p>{post.conteudo}</p>
                    <p className='mt-4 font-semibold text-rose-500'>Tema: {post.tema?.descricao}</p>
                    <div className='flex justify-end'><Curtir /></div>
                </div>
            </div>

            <div className='m-4'>

                <h2 className='mb-4 font-bold'>Comentários</h2>

                {comentarios.map(comentario => {
                    return (
                        <Comentarios conteudo={comentario} />
                    )
                })}
            </div>

            <form onSubmit={criarNovoComentario} className='flex flex-col '>
                <textarea
                    className='mt-4 pl-4 border-2 border-black rounded-full'
                    name='comment'
                    placeholder='Adicionar comentário'
                    value={novoComentarioTexto}
                    onChange={atualizarNovoComentario}
                    required
                />
                <footer>
                    <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold mt-2 py-1 px-4 rounded-full"
                        type="submit">Publicar</button>
                </footer>
            </form>

            

        </div>


    )
}

export default CardPostagens
