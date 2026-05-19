import { useState } from "react";
import { Publicacion } from "../elements/Publicacion.jsx";
import { ListaSugeridosFeed } from "./ListaSugeridosFeed";

export default function Feed({ publicaciones }) {

    return (

        <div className="feed">

            {publicaciones.map((publicacion, index) => (
                <div key={publicacion.id}>
                    <Publicacion publicacion={publicacion} />
                    <hr />
                    {
                        (index + 1) % 2 === 0 && (
                            <div>
                                <ListaSugeridosFeed />
                                <hr />
                            </div>
                        )
                    }
                </div>
            ))}

        </div>
    );
}