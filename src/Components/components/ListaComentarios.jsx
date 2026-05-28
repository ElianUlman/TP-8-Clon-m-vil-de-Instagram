import "./ListaComentarios.css"
import Comentario from "../elements/Comentario.jsx"

function ListaComentarios({ comentarios }){
    return(
        <div className="lista-comentarios">
            {
                comentarios.map((comentario, index) => (
                    <Comentario key={index} comentario={comentario} />
                ))
            }
        </div>
    )
}

export default ListaComentarios