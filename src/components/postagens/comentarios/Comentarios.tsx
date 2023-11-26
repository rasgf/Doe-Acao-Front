import { useState, useContext } from 'react';
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from 'react-router-dom';

interface ComentariosProps {
  conteudo: string;
}

function Comentarios({ conteudo }: ComentariosProps) {
  const { usuario } = useContext(AuthContext);
  const [novoComentario, setNovoComentario] = useState('');

  const handleComentarioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNovoComentario(e.target.value);
  };

  const handleSubmitComentario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar o comentário
    console.log('Comentário enviado:', novoComentario);
    // Limpe o campo do comentário após o envio
    setNovoComentario('');
  };

  return (
    <div className="flex items-center justify-center shadow-lg max-w-lg">
      <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2" onSubmit={handleSubmitComentario}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              value={novoComentario}
              onChange={handleComentarioChange}
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              name="body"
              placeholder="Escreva seu comentário"
              required
            ></textarea>
          </div>
          <div className="w-full md:w-full flex items-start md:w-full px-3">
            <Link to={"/perfil"}>
              <img
                src={usuario.foto}
                alt={usuario.nome}
                className="rounded-full  shadow hover:shadow-rose-200  h-12 w-12 mr-2"
              />
            </Link>
          
            <div className="-mr-1">
              <input
                type="submit"
                className="bg-rose-500 text-slate- font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                value="Publicar"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Comentarios;
