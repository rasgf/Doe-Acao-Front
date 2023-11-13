function Navbar() {
  return (
      <>
         <div className="relative  -mt-6  grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-rose-500 to-rose-600 bg-clip-border text-white shadow-lg shadow-pink-500/40">
          
              <div className="container flex justify-between text-lg ">
                  Doe Ação

                  <div className='flex gap-10 '>
                      <span>Postagens</span>
                      <span>Temas</span>
                      <span>Cadastrar tema</span>
                      <span>Perfil</span>
                      <span>Sobre nós</span>
                      <span>Sair</span>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Navbar