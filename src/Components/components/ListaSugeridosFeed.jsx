import CardSugerido from '../elements/CardSugerido'

function ListaSugeridosFeed({ ListaPerfilesSugeridos }){
    return(
        <section>
            <h1>Suggestions for you</h1>
            <h2>See all</h2>
            {
                ListaPerfilesSugeridos.map((perfil, index) => (
                    <CardSugerido key={index} perfil={perfil}/>
                ))
            }
        </section>
    )
}

export default ListaSugeridosFeed