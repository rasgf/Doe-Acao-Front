import { GithubLogo} from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gradient-to-tr from-rose-500 to-rose-600 bg-clip-border text-white shadow-lg shadow-pink-500/40 rounded-xl">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Doe Ação | &copy; {data}
                        </p>
                    <p className='text-lg'>Acesse o nosso GitHub</p>
                    <div className='flex gap-2'>
                    <GithubLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer