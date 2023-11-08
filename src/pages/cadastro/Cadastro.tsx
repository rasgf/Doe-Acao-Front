import { useNavigate } from 'react-router-dom'

import { useState } from 'react';

function Cadastro() {

    const navigate = useNavigate()

    const [tipoConta, setTipoConta] = useState('');

    function back() {
        navigate('/login')
    }
    return (
        <>

            <div className="min-w-screen   flex items-center justify-center">
                <div className="bg-gray-100 text-gray-500 shadow-xl w-full overflow-hidden" >
                    <div className="md:flex w-full">
                        <div className="hidden md:block w-1/2 bg-gray-300 py-10 px-10 flex justify-items-center">
                            <div className="hidden md:block w-2/2 bg-gray-300 py-10 px-10">
                                <img src="https://i.imgur.com/ZyojHNd.png" alt="Imagem de background" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-3xl text-gray-900">Cadastrar</h1>
                                <p>Enter your information to register</p>
                            </div>
                            <form className='flex justify-center items-center flex-col w-3/3 gap-3' >
                                <div className="flex flex-col w-full">
                                    <label htmlFor="cpf">Tipo do cadastro</label>
                                    <select
                                    onChange={(e) => setTipoConta(e.target.value)}
                                        id="cpf"
                                        name="cpf"
                                        placeholder="cpf"
                                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500">

                                        <option value="cpf">Pessoa Física</option>
                                        <option value="ong">ONG</option>

                                    </select>
                                </div>
                                
                                {tipoConta === 'cpf' && <div className="flex flex-col w-full">
                                    <label htmlFor="cpf">CPF</label>
                                    <input
                                        type="cpf"
                                        id="cpf"
                                        name="cpf"
                                        placeholder="CPF"
                                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"
                                    />
                                </div>}
                                {tipoConta === 'ong' &&
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="cnpj">CNPJ</label>
                                        <input
                                            type="cnpj"
                                            id="cnpj"
                                            name="cnpj"
                                            placeholder="CNPJ"
                                            className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"
                                        />
                                    </div>}

                                <div className="flex flex-col w-full">
                                    <label htmlFor="nome">Nome</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        placeholder="Nome"
                                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"

                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="usuario">Usuario</label>
                                    <input
                                        type="text"
                                        id="usuario"
                                        name="usuario"
                                        placeholder="Usuario"
                                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="data">Data de Nascimento</label>
                                    <input
                                        type="date"
                                        id="data"
                                        name="data"
                                        placeholder="data"
                                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"
                                    />
                                </div>

                                <div className="flex flex-col w-full">
                                    <label htmlFor="foto">Foto</label>
                                    <input
                                        type="text"
                                        id="foto"
                                        name="foto"
                                        placeholder="Foto"
                                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="senha">Senha</label>
                                    <input
                                        type="password"
                                        id="senha"
                                        name="senha"
                                        placeholder="Senha"
                                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                                    <input
                                        type="password"
                                        id="confirmarSenha"
                                        name="confirmarSenha"
                                        placeholder="Confirmar Senha"
                                        className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-rose-500"
                                    />
                                </div>
                                <div className="flex justify-around w-full gap-8">
                                    <button className='rounded text-black bg-gray-200 border border-black hover:bg-gray-300 w-1/2 py-2' onClick={back}>
                                        Cancelar
                                    </button>
                                    <button
                                        className='block w-full max-w-xs mx-auto bg-rose-500 hover:bg-rose-700 focus:bg-rose-700 text-white rounded-lg px-3 py-3 font-semibold' type='submit'>
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro