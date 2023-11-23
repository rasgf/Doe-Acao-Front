import { useContext, useEffect } from "react"
import { toastAlerta } from "../../utils/toastAlerta"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

function Sobre() {

    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Você precisa estar logado', "info")
            navigate("/login")
        }
    }, [usuario.token])

  return (
    <>
      <div className="container m-auto pt-24 px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img className="rounded-lg" src="https://i.imgur.com/ZVWhEtL.jpg" alt="image" loading="lazy" width="" height=""/>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">Sobre o projeto</h2>
            <p className="mt-6 text-gray-600">Doe Ação é uma rede social com o propósito de conectar pessoas com ONGs que necessitam de ajuda. Nessa rede, as ONGs publicam postagens a partir de um tema, como, por exemplo, trabalho voluntário, doação de alimentos, roupas ou brinquedos, etc. Os usuários conseguem se conectar com o tema de mais interesse, enquanto as organizações conseguem encontrar pessoas a partir de sua necessidade.</p>
            <p className="mt-6 text-gray-600">O projeto Doe Ação é uma rede caritativa que visa promover uma cultura de solidariedade, permitindo que pessoas se envolvam em causas sociais e façam a diferença no mundo.</p>
            <p className="mt-4 text-gray-600"> Projeto desenvolvido durante o bootcamp da organização Generation Brasil, com objetivo de criar uma plataforma baseada na ODS(Objetivos de Desenvolvimento Sustentável) de Erradicação da Pobreza.</p>
          </div>
        </div>
      </div>
      <section className="max-w-6xl mx-auto pt-24 pb-24 px-4 sm:px-6 lg:px-4 py-12">
          <div className="text-center pb-12">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                  Conheça o nosso time
              </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex min-h-fit flex-col items-center justify-center w-full bg-white rounded-lg p-12">
                    <div className="group h-60 w-60 [perspective:1000px]">
                        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <img className="h-full w-full rounded-xl object-cover shadow-1 shadow-black/40  " src="https://i.imgur.com/qSrTRgk.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3x1 font-bold">Eduardo Nogueira</h1>
                                        <p className="text-xs">Full Stack Java Developer</p>
                                        <p className="text-xs">26 anos</p>
                                        <p className="text-xs">Itupeva - SP</p>
    
                                        <button className="mt-2 roudend-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"><a href="https://www.linkedin.com/in/eduardo-nogueira-silva/" target="_blank" rel="noopener noreferrer">Leia mais</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  <div className="flex min-h-fit flex-col items-center justify-center w-full bg-white rounded-lg p-12">
                    <div className="group h-60 w-60 [perspective:1000px]">
                        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <img className="h-full w-full rounded-xl object-cover shadow-1 shadow-black/40  " src="https://i.imgur.com/rcQLmCS.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3x1 font-bold">Eliza Reis</h1>
                                        <p className="text-xs">Full Stack Java Developer</p>
                                        <p className="text-xs">28 anos</p>
                                        <p className="text-xs">Rio de Janeiro - RJ</p>
    
                                        <button className="mt-2 roudend-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"><a href="https://www.linkedin.com/in/eliza-costa/" target="_blank" rel="noopener noreferrer">Leia mais</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
              <div className="flex min-h-fit flex-col items-center justify-center w-full bg-white rounded-lg p-12">
                    <div className="group h-60 w-60 [perspective:1000px]">
                        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <img className="h-full w-full rounded-xl object-cover shadow-1 shadow-black/40  "  src="https://i.imgur.com/BvTQdAb.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3x1 font-bold">Matheus Sousa</h1>
                                        <p className="text-xs">Full Stack Java Developer</p>
                                        <p className="text-xs">27 anos</p>
                                        <p className="text-xs">Petrópolis - RJ</p>
    
                                        <button className="mt-2 roudend-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"><a href="https://www.linkedin.com/in/dsousamt/" target="_blank" rel="noopener noreferrer">Leia mais</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
              <div className="flex min-h-fit flex-col items-center justify-center w-full bg-white rounded-lg p-12">
                    <div className="group h-60 w-60 [perspective:1000px]">
                        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <img className="h-full w-full rounded-xl object-cover shadow-1 shadow-black/40  "   src="https://i.imgur.com/cWqN3HW.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3x1 font-bold">Maylis Maria</h1>
                                        <p className="text-xs">Full Stack Java Developer</p>
                                        <p className="text-xs">20 anos</p>
                                        <p className="text-xs">São Paulo - SP</p>
    
                                        <button className="mt-2 roudend-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"><a href="https://www.linkedin.com/in/maylismaria/" target="_blank" rel="noopener noreferrer">Leia mais</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex min-h-fit flex-col items-center justify-center w-full bg-white rounded-lg p-12">
                    <div className="group h-60 w-60 [perspective:1000px]">
                        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <img className="h-full w-full rounded-xl object-cover shadow-1 shadow-black/40  "   src="https://i.imgur.com/qVHL3OM.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3x1 font-bold">Nathan Coelho</h1>
                                        <p className="text-xs">Full Stack Java Developer</p>
                                        <p className="text-xs">24 anos</p>
                                        <p className="text-xs">Itaquaquecetuba - SP</p>
    
                                        <button className="mt-2 roudend-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"><a href="https://www.linkedin.com/in/nathan-ccoelho/" target="_blank" rel="noopener noreferrer">Leia mais</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex min-h-fit flex-col items-center justify-center w-full bg-white rounded-lg p-12">
                    <div className="group h-60 w-60 [perspective:1000px]">
                        <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <img className="h-full w-full rounded-xl object-cover shadow-1 shadow-black/40  "   src="https://i.imgur.com/Uq7ZpSa.jpg" alt="" />
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center">
                                    <h1 className="text-3x1 font-bold">Ricardo Galvão</h1>
                                        <p className="text-xs">Full Stack Java Developer</p>
                                        <p className="text-xs">26 anos</p>
                                        <p className="text-xs">Rio de Janeiro - RJ</p>
    
                                        <button className="mt-2 roudend-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"><a href="https://www.linkedin.com/in/ricardo-galvao22/" target="_blank" rel="noopener noreferrer">Leia mais</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

          </div>
      </section>
    </>
  )
}

export default Sobre