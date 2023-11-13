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
          Doe Ação
          <div className="flex gap-4">
            Postagens Temas Cadastrar tema Perfil
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