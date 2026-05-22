import { useState } from "react";
import "./Publicacion.css";

export default function Publicacion({ publicacion }) {
  return (
    <div className="publicacion">

      <div className="publicacion-header">
        <img className="avatar" src={publicacion.author.url} alt="avatar" />
        <span className="username">{publicacion.nombre || "nombre Usuario"}</span>
      </div>

      <img className="imagen" src={publicacion.url} alt="post" />

      <div className="publicacion-acciones">
        <button><img src="#" alt="" /></button>
        <button><img src="#" alt="" /></button>
        <button><img src="#" alt="" /></button>
        <button className="guardar"><img src="#" alt="" /></button>
      </div>

      <div className="publicacion-likes">{publicacion.likes || 67} likes</div>

      <div className="publicacion-descripcion">
        <span className="username">{publicacion.username || "nombre usuario "}</span>
        <span>{publicacion.descripcion || "descripcion de publicacion"}</span>
      </div>

      <div className="publicacion-comentarios">
        Ver los {publicacion.cantidadComentarios || 67} comentarios
      </div>

      <input className="agregar-comentario" type="text" placeholder="Agregar un comentario..." />
    </div>
  );
}