import "./Comentario.css"

function Comentario({ comentario }){
    return(
        <div className="comentario">
            <img className="comentario-avatar" src={comentario.author.url} alt={comentario.author.nombre} />
            <div className="comentario-texto">
                <p className="comentario-autor">{comentario.author.nombre}</p>
                <p className="comentario-contenido">{comentario.contenido}</p>
            </div>
            <button className="comentario-like">♡</button>
        </div>
    )
}

export default Comentario