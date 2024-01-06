import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetSearchPokemon, searchPokemon } from "../../redux/actions";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemonFound = useSelector((state) => state.pokemonFound);
  const findPokemon = useSelector((state) => state.searchPokemon);

  useEffect(() => {
    if (findPokemon) {
      dispatch(resetSearchPokemon());
      navigate(`/detail/${pokemonFound.id}`);
    }
  }, [pokemonFound]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0) {
      dispatch(searchPokemon(search.toLocaleLowerCase()));
      setSearch("");
    }
  };
  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div>
      <div>
        {
          <div>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={search}
                onChange={onChange}
                placeholder="insert the pokemon to search..."
              />
              <button type="submit">Search</button>
            </form>
          </div>
        }
      </div>
    </div>
  );
};

export default SearchBar;
