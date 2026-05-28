import { useState } from "react";
import "./Publicacion.css";

export default function Publicacion({ publicacion, verPublicacion }) {
  
  const handleClick = () => {
    verPublicacion(publicacion)
  }

  return (
    <div className="publicacion" onClick={handleClick}>

      <div className="publicacion__header">
        <img className="publicacion__avatar" src={publicacion.author.url} alt="avatar" />
        <div className="publicacion__header-info">
          <span className="publicacion__username">{publicacion.author.nombre}</span>
          <span className="publicacion__tiempo">• 5h</span>
        </div>
        <button className="publicacion__opciones">···</button>
      </div>

      <img className="publicacion__imagen" src={publicacion.url} alt="post" />

      <div className="publicacion__acciones">
        <div className="publicacion__acciones-izquierda">
          <button className="publicacion__btn"><img src="../src/img/Likes.png" alt="like" /></button>
          <button className="publicacion__btn"><img src="../src/img/Comentarios.png" alt="comentar" /></button>
          <button className="publicacion__btn"><img src="../src/img/Compartir.png" alt="compartir" /></button>
        </div>
        <button className="publicacion__btn publicacion__btn--guardar"><img src="../src/img/guardar.png" alt="guardar" /></button>
      </div>

      <div className="publicacion__likes">{publicacion.likes || 67} likes</div>

      <div className="publicacion__descripcion">
        <span className="publicacion__username">{publicacion.username || "nombre usuario "}</span>
        <span>{publicacion.descripcion || "descripcion de publicacion"}</span>
      </div>

      <div className="publicacion__comentarios">
        Ver los {publicacion.comentarios.length || 67} comentarios
      </div>

      <input className="publicacion__agregar-comentario" type="text" placeholder="Agregar un comentario..." disabled/>
    </div>
  );
}