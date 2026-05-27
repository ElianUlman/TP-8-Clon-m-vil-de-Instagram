import "./ListaComentarios.css"
import Comentario from "../elements/Comentario.jsx"

function ListaComentarios({ comentarios }){
    return(
        <>
            {
                comentarios.map((comentario, index) => (
                    <Comentario key={index} comentario={comentario} />
                ))
            }
        </>
    )
}

export default ListaComentarios