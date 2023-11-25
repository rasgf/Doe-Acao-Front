import { AuthContext } from "../../../contexts/AuthContext"
import {useContext} from 'react';
import { Link } from 'react-router-dom'


interface ComentariosProps {
  conteudo: string;
}

function Comentarios({ conteudo }: ComentariosProps) {
  const { usuario } = useContext(AuthContext);
  

  return (
    <div className="flex items-center mt-4">
      <Link to={"/perfil"}>
      <img
        src={usuario.foto}  
        alt={usuario.nome}
        className="rounded-full  shadow hover:shadow-rose-500 h-12 w-12 mr-2"
      />
      </Link>
      <div>
        <p className="text-sm font-semibold">{usuario.nome}</p>
        <p className="pl-2 pb-1 bg-slate-200 rounded-full break-words">{conteudo}</p>
      </div>
    </div>
  );
}

export default Comentarios;