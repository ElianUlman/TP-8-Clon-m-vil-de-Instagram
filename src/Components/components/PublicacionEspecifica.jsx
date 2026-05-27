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
                <img src={publicacion.url} alt="" />
                <ListaComentarios comentarios={publicacion.comentarios} />
                <div className="publicacion-acciones">
                    <button><img src="#" alt="" /></button>
                    <button><img src="#" alt="" /></button>
                    <button><img src="#" alt="" /></button>
                    <button className="guardar"><img src="#" alt="" /></button>
                </div>

                <div>
                    <img src="" alt="Emoji" />
                    <input className="agregar-comentario" type="text" placeholder="Agregar un comentario..." />
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default PublicacionEspecifica