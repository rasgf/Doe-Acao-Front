import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }
  return (
    <>
      <div className="relative  -mt-6  grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-rose-500 to-rose-600 bg-clip-border text-white shadow-lg shadow-pink-500/40">
        <div className="container flex justify-between text-lg ">
        <Link to='/home' className='hover:underline'>Doe Ação</Link>
          <div className="flex gap-4">

          <Link to='/temas' className='hover:underline'>Temas</Link>
          <Link to='/cadastroTema' className='hover:underline'>Cadastrar Tema</Link>
          <Link to='/postagens' className='hover:underline'>Postagens</Link>
           Perfil
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;