import "./Comentario.css"

function Comentario({ comentario }){
    return(
        <>
            <img src={comentario.author.url} alt={comentario.author.nombre} />
            <p>{comentario.author.nombre}</p>
            <p>{comentario.contenido}</p>
            <button>Like</button>
        </>
    )
}

export default Comentario