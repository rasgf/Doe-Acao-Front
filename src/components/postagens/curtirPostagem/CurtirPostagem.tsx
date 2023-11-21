import { useState } from 'react'

function Curtir() {
    const [valor, setValor] = useState(0);

    function Curtir() {
        setValor(valor + 1);
    }

    return (
        <div>
            <button onClick= {Curtir} className='rounded text-rose-500 border-rose-500 font-bold border-solid border-2 py-2 px-4
                        transition-all hover:shadow-lg hover:shadow-rose-500/40 active:opacity-[0.85]'>
                       Curtir
                      </button>
            <p>Curtidas: {valor}</p>

        </div>
    )
}

export default Curtir