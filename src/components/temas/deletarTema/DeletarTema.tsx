import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { buscar, deletar } from "../../../services/Services";
import { AuthContext } from "../../../contexts/AuthContext";

import Tema from "../../../models/Tema";
import { RotatingLines } from "react-loader-spinner";
import { toastAlerta } from "../../../utils/toastAlerta";

function DeletarTema() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [tema, setTema] = useState<Tema>({} as Tema)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente','info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado','info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Tema apagado com sucesso','sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Tema','erro')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className='flex flex-col bg-white shadow-lg rounded-lg md:mx-auto py-8 px-8 max-w-md md:max-w-2xl'>
            <h1 className='text-4xl text-center my-4'>Deletar Tema</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o tema a seguir?
            </p>

            <div className='flex flex-col rounded-2xl overflow-hidden justify-between items-center'>
            <hr className='border border-solid border-gray-100 w-full'/>
                <header className='py-8 px-6 font-bold text-2xl'>
                    {tema.descricao}
                </header>

                <div className="pb-8">

                    <button
                        className='rounded text-rose-500 
                        border-rose-500 font-bold border-solid border-rose-500 border-2 py-2 px-4 transition-all hover:shadow-lg hover:shadow-rose-500/40 active:opacity-[0.85] mr-2'
                        onClick={retornar}>
                        Não
                    </button>

                    <button
                        className='rounded text-white 
                        bg-rose-500 font-bold border-solid border-2 border-rose-500 py-2 px-4 transition-all hover:shadow-lg hover:shadow-rose-500/40 active:opacity-[0.85]'
                        onClick={deletarTema}>

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>

                </div>
            </div>
        </div>
        </div>
    )
}
export default DeletarTema