import "./ListaComentarios.css"
import Comentario from "../elements/Comentario.jsx"

function ListaComentarios({ comentarios }){
    return(
        <>
            {
                comentarios.map((comentario, index) =>{
                    <div>
                        <img src={comentario.autor.url} alt="" />
                        <h5>{comentario.autor.nombre}</h5>
                        <p>{comentario.contenido}</p>
                        <button id="Like"></button>

                    </div>
                })
            }
        </>
    )
}

export default ListaComentarios