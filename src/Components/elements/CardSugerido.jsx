import FollowBtn from './followBtn'
import "./CardSugerido.css"

function CardSugerido({perfil}){

    return(
        <div className="card-sugerido">

            <button className="card-sugerido__cerrar">×</button>

            <img className="card-sugerido__foto" src={perfil.url} alt={perfil.nombre} />

            <div className="card-sugerido__info">
                <p className="card-sugerido__nombre">{perfil.nombre || "nombre"}</p>
                <p className="card-sugerido__subtitulo">Follows you</p>
            </div>

            <FollowBtn id={perfil.id}/>

        </div>
    )
}

export default CardSugerido
