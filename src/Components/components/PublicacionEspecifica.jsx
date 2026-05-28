import "./PublicacionEspecifica.css"
import ListaComentarios from "./ListaComentarios"

function PublicacionEspecifica({ publicacion, verPublicacion }) {

    const handleClose = () => {
        verPublicacion(null)
    }

    return (
        <div id="FondoOscuro">
            <button id="Cerrar" onClick={handleClose}>X</button>
            <div id="Popup">
                <img id="popup-imagen" src={publicacion.url} alt="" />
                <div id="popup-derecha">
                    <ListaComentarios comentarios={publicacion.comentarios} />
                    <div className="publicacion-acciones">
                        <button className="accion-btn"><img src="../src/img/Likes.png" alt="like" /></button>
                        <button className="accion-btn"><img src="../src/img/Comentarios.png" alt="comentar" /></button>
                        <button className="accion-btn"><img src="../src/img/Compartir.png" alt="compartir" /></button>
                        <button className="guardar accion-btn"><img src="../src/img/guardar.png" alt="guardar" /></button>
                    </div>
                    <div className="agregar-comentario-container">
                        <img className="emoji-img" src="../src/img/Emoji.png" alt="Emoji" />
                        <input className="agregar-comentario" type="text" placeholder="Agregar un comentario..." />
                        <button className="post-btn">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicacionEspecifica