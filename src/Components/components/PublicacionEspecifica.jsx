import "./PublicacionEspecifica.css"
import ListaComentarios from "./ListaComentarios"

function PublicacionEspecifica({ publicacion }) {
    return (
        <div id="FondoOscuro">
            <button id="Cerrar">X</button>
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