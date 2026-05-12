
import CardSugerido from './CardSugerido'


function ListaSugeridosFeed(props){


    return(
        <section>
            <h1>Suggestions for you</h1>
            <h2>See all</h2>
            {
                props.map((item, index) => (
                    <CardSugerido url={props.url} breeds={props.breeds} id={props.id}/>
                ))
            }
        </section>
    )
}

export default ListaSugeridosFeed
