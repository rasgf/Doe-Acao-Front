import { ThumbsUp } from '@phosphor-icons/react';
import { useState } from 'react'

function Curtir() {
    const [valor, setValor] = useState(0);

    function Curtir() {
        setValor(valor + 1);
    }

    return (
        <div>
            <button onClick= {Curtir}
            className='flex flex-row gap-2 rounded text-rose-500 border-rose-500 font-bold border-solid border-2 py-1 px-2 my-4
            transition-all hover:shadow-lg hover:shadow-rose-500/40 active:text-rose-500 activeborder-rose-500'>
                <ThumbsUp size={24} weight='bold' />
                <span>{valor}</span>
            </button>
        </div>
    )
}

export default Curtir