import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const PokemonContext = createContext();

const initializer = (initialValue = []) =>
  JSON.parse(localStorage.getItem("my_pokemon")) || initialValue;

export const PokemonProvider = ({ children }) => {
  const [myPokemon, dispatch] = useReducer(reducer, [], initializer);

  useEffect(() => {
    localStorage.setItem("my_pokemon", JSON.stringify(myPokemon));
  }, [myPokemon]);

  return (
    <PokemonContext.Provider value={{ myPokemon, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
