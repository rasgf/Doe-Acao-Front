import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'


interface ComentariosProps {
  conteudo: string
}

function Comentarios({ conteudo }: ComentariosProps) {
const {usuario} = useContext(AuthContext)

  return (
    <div className="flex items-center mt-4 ">
    <Link to={"/perfil"}>
    <img
      src={usuario.foto}  
      alt={usuario.nome}
      
      className="rounded-full border border-gray-400 h-10 w-10 mr-2"
    />
    </Link>
    <div>
      <p className="text-sm font-semibold">{usuario.nome}</p>
      <p className="pl-2 pb-1 bg-gray-100 rounded border border-gray-400 leading-normal resize-none break-words">{conteudo}</p>
    </div>
  </div>
  )
}

export default Comentarios