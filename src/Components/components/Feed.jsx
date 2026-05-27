import { useState } from "react";
import  Publicacion  from "../elements/Publicacion.jsx";
import ListaSugeridosFeed  from "./ListaSugeridosFeed";
import "./Feed.css";

export default function Feed({ publicaciones, sugeridos }) {

    return (

        <div className="feed">

            {publicaciones.map((publicacion, index) => (
                <div className="feed__item" key={publicacion.id}>
                    <Publicacion publicacion={publicacion} />

                    <hr className="feed__separador"/>

                    {
                        
                        (index + 1) % 4 === 0 && (
                            <div className="feed__sugeridos">
                                <ListaSugeridosFeed ListaSugeridos={sugeridos}/>
                                <hr className="feed__separador"/>
                            </div>
                        )
                        
                    }
                </div>
            ))}

        </div>
    );
}