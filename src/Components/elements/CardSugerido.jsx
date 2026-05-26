
import FollowBtn from './followBtn'
import "./CardSugerido.css"

function CardSugerido({perfil}){
    //props?.breeds[0]?.name || 

    return(
        <div>
            <img src="" alt="X"/>
            <img className='cardSugerdioImg' src={perfil.url} alt="img" />
            
            <h2>{perfil.nombre || "nombre"}</h2>
            <h3>Follows you</h3>
            <FollowBtn id={perfil.id}/>

        </div>
    )
}

export default CardSugerido
