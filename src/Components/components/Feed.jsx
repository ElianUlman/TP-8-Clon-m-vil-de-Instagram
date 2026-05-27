import { useState } from "react";
import  Publicacion  from "../elements/Publicacion.jsx";
import ListaSugeridosFeed  from "./ListaSugeridosFeed";

export default function Feed({ publicaciones, sugeridos, verPublicacion }) {

    return (
        <div className="feed">
            {publicaciones.map((publicacion, index) => (
                <div key={publicacion.id}>
                    <Publicacion publicacion={publicacion} verPublicacion={verPublicacion} />
                    <hr />

                    {
                        (index + 1) % 4 === 0 && (
                            <div>
                                <ListaSugeridosFeed ListaPerfilesSugeridos={sugeridos}/>
                                <hr />
                            </div>
                        )   
                    }
                </div>
            ))}
        </div>
    );
}