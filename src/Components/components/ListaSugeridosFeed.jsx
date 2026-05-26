
import CardSugerido from '../elements/CardSugerido'
import "./ListaSugeridosFeed.css"

function ListaSugeridosFeed({ ListaSugeridos }) {


    return (
        <section >
            <h1>Suggestions for you</h1>
            <h2>See all</h2>
            <div className='ListaSugeridosFeedDiv'>
                {
                    ListaSugeridos.map((item, index) => (
                        <CardSugerido perfil={item} />
                    ))
                }
            </div>

        </section>
    )
}

export default ListaSugeridosFeed
