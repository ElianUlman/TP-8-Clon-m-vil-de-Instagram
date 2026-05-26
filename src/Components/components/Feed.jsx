import { useState } from "react";
import Publicacion from "../elements/Publicacion.jsx";

export default function Feed({ publicaciones }) {
    return (
        <div className="feed">
            {publicaciones.map((publicacion) => (
                <div key={publicacion.id}>
                    <Publicacion publicacion={publicacion} />
                    <hr />
                </div>
            ))}
        </div>
    );
}