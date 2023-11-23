interface ComentariosProps {
    conteudo: string
}

function Comentarios({ conteudo }: ComentariosProps) {
    return (
        <p className="mt-4 pl-2 pb-1 bg-slate-200 rounded-full break-words">{conteudo}</p>
    )
}

export default Comentarios