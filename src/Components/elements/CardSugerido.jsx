import FollowBtn from './followBtn'

function CardSugerido({ perfil }){
    return(
        <div>
            <img src="" alt="X"/>
            <img src={perfil.url} alt="image" />
            <h2>{perfil.nombre}</h2>
            <h3>Follows you</h3>
            <FollowBtn id={perfil.id}/>
        </div>
    )
}

export default CardSugerido