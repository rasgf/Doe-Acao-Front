function Sobre() {
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
              <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div className="mb-8">
                      <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/qSrTRgk.jpg" alt="foto"/>
                  </div>
                  <div className="text-center">
                      <p className="text-xl text-gray-700 font-bold mb-2">Eduardo Nogueira</p>
                  </div>
              </div>
              <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div className="mb-8">
                      <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/rcQLmCS.jpg" alt="foto"/>
                  </div>
                  <div className="text-center">
                      <p className="text-xl text-gray-700 font-bold mb-2">Eliza Reis</p>
                  </div>
              </div>
              <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div className="mb-8">
                      <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/BvTQdAb.jpg" alt="foto"/>
                  </div>
                  <div className="text-center">
                      <p className="text-xl text-gray-700 font-bold mb-2">Matheus Sousa</p>
                  </div>
              </div>
              <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div className="mb-8">
                      <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/cWqN3HW.jpg" alt="foto"/>
                  </div>
                  <div className="text-center">
                      <p className="text-xl text-gray-700 font-bold mb-2">Maylis Maria</p>
                  </div>
              </div>
              <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div className="mb-8">
                      <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/qVHL3OM.jpg" alt="foto"/>
                  </div>
                  <div className="text-center">
                      <p className="text-xl text-gray-700 font-bold mb-2">Nathan Coelho</p>
                  </div>
              </div>
              <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div className="mb-8">
                      <img className="object-center object-cover rounded-full h-36 w-36" src="https://i.imgur.com/Uq7ZpSa.jpg" alt="foto"/>
                  </div>
                  <div className="text-center">
                      <p className="text-xl text-gray-700 font-bold mb-2">Ricardo Galvão</p>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Sobre