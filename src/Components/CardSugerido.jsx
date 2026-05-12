
import FollowBtn from './followBtn'

function CardSugerido(props){
    //seguir

    return(
        <div>
            <img src="" alt="X"/>
            <img src={props.url} alt="image" />
            
            <h2>{props.breeds[0]?.name || "meowser"}</h2>
            <h3>Follows you</h3>
            <FollowBtn id={props.id}/>

        </div>
    )
}

export default CardSugerido
