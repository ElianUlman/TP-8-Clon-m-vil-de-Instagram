
import CardSugerido from './CardSugerido'


function ListaSugeridosFeed({ListaSugeridos}){


    return(
        <section>
            <h1>Suggestions for you</h1>
            <h2>See all</h2>
            {
                ListaSugeridos.map((item, index) => (
                    <CardSugerido url={item.url} breeds={item.breeds || null} id={item.id}/>
                ))
            }
        </section>
    )
}

export default ListaSugeridosFeed
