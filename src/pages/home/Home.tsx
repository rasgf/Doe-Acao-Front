
function Home() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold text-rose-500'>
                            Onde boas intenções encontram boas doações
                        </h2>
                        <p className='text-xl'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum quibusdam doloribus, explicabo blanditiis nobis aliquam vero unde dolor suscipit. 
                        </p>

                        <div className="flex justify-around gap-4 self-start">
                            <div className='rounded text-rose-500 
                                            border-rose-500 font-bold border-solid border-2 py-2 px-4'
                                >
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/ncSVCT9.png"
                            alt="Imagem Página Home"
                            className='w-3/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home