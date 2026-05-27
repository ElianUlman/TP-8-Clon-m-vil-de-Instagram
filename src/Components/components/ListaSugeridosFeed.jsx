import CardSugerido from '../elements/CardSugerido'
import "./ListaSugeridosFeed.css"

function ListaSugeridosFeed({ ListaPerfilesSugeridos }){
    return(
        <section>
            <h1>Suggestions for you</h1>
            <h2>See all</h2>
            <div className='ListaSugeridosFeedDiv'>
                {
                    ListaPerfilesSugeridos.map((item, index) => (
                        <CardSugerido perfil={item} />
                    ))
                    
                }
            </div>
        </section>
    )
}

export default ListaSugeridosFeed