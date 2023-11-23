interface ComentariosProps {
    conteudo: string
}

function Comentarios({ conteudo }: ComentariosProps) {
    return (
        <p className="mt-4 flex flex-wrap pl-2 pb-1 bg-slate-200 rounded-full">{conteudo}</p>
    )
}

export default Comentarios