import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../redux/actions";
import Pokemon from "../Pokemon/Pokemon";
import style from "./Detail.module.scss";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [id]);
  return (
    <div className={style.containerprin}>
      {pokemonDetail.name ? (
        <div className={style.container}>
          <div className={style.details_container_title}>
            <h1 className={style.details_title}>POKÉMON DETAILS</h1>
          </div>

          <div className={style.container_details}>
            <div>
              <div>{/* <img src={pictureAsh} alt="Ash" /> */}</div>
            </div>

            <div className={style.details_info}>
              <Pokemon
                id={pokemonDetail.id}
                name={pokemonDetail.name}
                image={pokemonDetail.image}
                image2={pokemonDetail.image2}
                attack={pokemonDetail.attack}
                types={pokemonDetail.types}
                key={pokemonDetail.id}
              />
            </div>
            <div className={style.details_stats}>
              <div className={style.details_info_types}>
                <span className={style.stats_title}>Measures</span>
                <ul className={style.ul}>
                  <li className={style.stats_item}>
                    Height: {pokemonDetail.height}
                  </li>
                  <li className={style.stats_item}>
                    Weight: {pokemonDetail.weight}
                  </li>
                </ul>
              </div>
              <div className={style.details_stats}>
                <span className={style.stats_title}>Stats</span>
                <div>
                  <div>
                    <div>
                      <h5>HP: {pokemonDetail.hp}</h5>
                    </div>
                    <div>
                      <h5>Attack: {pokemonDetail.attack}</h5>
                    </div>
                    <div>
                      <h5>Defense: {pokemonDetail.defense}</h5>
                    </div>
                    <div>
                      <h5>Speed: {pokemonDetail.speed}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // verificacion de que el pokemon este cargado para mostrarlo
        <>
          <div className={style.container_loading}>
            {/* <img src={imgLoading} alt="Loading..." /> */}
            <h1>Loading...</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
