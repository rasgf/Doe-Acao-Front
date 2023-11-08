function Perfil() {
  return (
    <>
     <div className="min-h-[80vh] flex items-center">
     <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div className="px-6">
              <div className="flex flex-wrap justify-center ">
                  <div className="w-full flex justify-center ">
                      <div className="relative">
                          <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                      </div>
                  </div>
                  <div className="w-full text-center mt-20">                      
                  </div>
              </div>
              <div className="text-center mt-2">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Nome do usuário</h3>
              </div>
              <div className="mt-6 py-6 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                      <div className="w-full px-4">
                          <p className="font-light leading-relaxed text-slate-600 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellendus assumenda adipisci, eos quo incidunt odio illum veniam blanditiis, rem rerum asperiores dicta nihil facilis quidem quaerat nobis. Neque, laboriosam?</p>
                          <a href="javascript:;" className="font-normal text-slate-700 hover:text-slate-400">Enviar email</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     </div>
    </>
  )
}

export default Perfil