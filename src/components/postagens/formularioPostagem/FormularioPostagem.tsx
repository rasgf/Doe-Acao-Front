import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { atualizar, buscar, cadastrar } from "../../../services/Services";
import { AuthContext } from '../../../contexts/AuthContext';

import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioPostagem() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({ id: 0, descricao: '', })
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPostagemPorId(id: string) {
        await buscar(`/postagens/${id}`, setPostagem, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarTemaPorId(id: string) {
        await buscar(`/temas/${id}`, setTema, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarTemas() {
        await buscar('/temas', setTemas, {
            headers: {
                Authorization: token,
            },
        })
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarTemas()

        if (id !== undefined) {
            buscarPostagemPorId(id)
        }
    }, [id])

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        })
    }, [tema])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/postagens');
    }

    async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id != undefined) {
            try {
                await atualizar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                toastAlerta('Postagem atualizada com sucesso', 'sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar a Postagem', 'erro')
                }
            }

        } else {
            try {
                await cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                toastAlerta('Postagem cadastrada com sucesso', 'sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'info')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar a Postagem', 'erro');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTema = tema.descricao === '';

    return (
        <div className="container flex flex-col mx-auto items-center mb-8">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}
            </h1>

            <form className="flex flex-col w-full px-8 gap-4" onSubmit={gerarNovaPostagem}>
                <div className="flex flex-col ">
                    <label htmlFor="titulo">Título da Postagem</label>
                    <input
                        value={postagem.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o Título"
                        name="titulo"
                        required
                        className="title bg-gray-100 border border-gray-300 p-2 outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <p>Tema da Postagem</p>
                    <select name="tema" id="tema"
                        className='title bg-gray-100 border border-gray-300 p-2 outline-none'
                        onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um Tema</option>
                        {temas.map((tema) => (
                            <>
                                <option value={tema.id} >{tema.descricao}</option>
                            </>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="foto">Link da Foto</label>
                    <input
                        value={postagem.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o link da foto"
                        name="foto"
                        className="title bg-gray-100 border border-gray-300 p-2 outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="titulo">Texto da Postagem</label>

                    <input
                        value={postagem.conteudo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Adicione aqui o Texto da Postagem"
                        name="conteudo"
                        required
                        className="description bg-gray-100 sec p-3 h-30 border border-gray-300 outline-none"
                    />
                </div>
                <button
                    type='submit'
                    disabled={carregandoTema}
                    className='flex justify-center items-center rounded text-white bg-rose-500 font-bold border-solid border-2 border-rose-500 py-2 px-4 mr-2 rounded text-rose-500 font-bold border-solid border-2 py-2 px-4 transition-all hover:shadow-lg hover:shadow-rose-500/40 active:opacity-[0.85]'
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Confirmar</span>
                    }
                </button>

            </form>
        </div>
    )
}

export default FormularioPostagem;