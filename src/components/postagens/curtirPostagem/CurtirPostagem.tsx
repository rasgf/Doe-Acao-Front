import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';


const CurtirPostagem = () => {
  const [curtido, setCurtido] = useState(false);
  const [valor, setValor] = useState(0);

  const curtir = () => {
    if (!curtido) {
      setValor(valor + 1);
    } else {
      setValor(valor - 1);
    }

    setCurtido(!curtido);
  };

  return (
    <button
      onClick={curtir}
      className={`flex flex-row gap-2 rounded ${curtido ? 'text-rose-500' : 'text-gray-500'} font-bold py-1 px-2 my-4
        transition-all  active:text-rose-500 activeborder-rose-500`}
    >
      <FaHeart size={24} color={curtido ? 'red' : 'gray'} />
      <span>{valor}</span>
    </button>
  );
};

export default CurtirPostagem;