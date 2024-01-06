import { useState } from "react";
import style from "./Pokemon.module.scss";

const Pokemon = ({ name, image, image2, types, id }) => {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.card_container_title}>
          <span className={style.card_title}>{name}</span>
          {typeof id === "number" ? (
            <span className={style.card_title}>#{id}</span>
          ) : (
            <span></span>
          )}
        </div>
        {image && (
          <img
            className={style.cover_image}
            src={image}
            alt={name}
            width="300px"
            height="300px"
          />
        )}
        <div className={style.container_types}>
          {types &&
            types.map((type, index) => {
              return (
                <span className={style.types} key={index}>
                  {type.name}
                </span>
              );
            })}
        </div>
      </div>
      {image2 && (
        <img
          className={style.character}
          src={image2}
          width="250px"
          height="250px"
        />
      )}
    </div>
  );
};

export default Pokemon;
