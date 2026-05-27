import CardSugerido from '../elements/CardSugerido'
import "./ListaSugeridosFeed.css"

function ListaSugeridosFeed({ ListaSugeridos }) {

    return (
        <section className="lista-sugeridos-feed">

            <div className="lista-sugeridos-feed__header">
                <h5 className="lista-sugeridos-feed__titulo">Suggestions for you</h5>
                <button className="lista-sugeridos-feed__ver-todos">See all</button>
            </div>

            <div className="lista-sugeridos-feed__carrusel">
                {
                    ListaSugeridos.map((item, index) => (
                        <CardSugerido perfil={item} key={index}/>
                    ))
                }
            </div>

        </section>
    )
}

export default ListaSugeridosFeed