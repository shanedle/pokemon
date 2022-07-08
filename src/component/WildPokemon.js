import { useHistory } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";
import { usePokemon } from "../context";

const WildPokemon = ({ pokemonData }) => {
  const { myPokemon } = usePokemon();
  const history = useHistory();
  const pokemonCount = myPokemon.filter(
    (pokemon) => pokemon.name === pokemonData.name
  ).length;

  const goToPokemon = () => {
    history.push(`/${pokemonData.name}`);
  };

  return (
    <Box {...pokemon_container} onClick={goToPokemon}>
      <Text {...pokemon_name}>{pokemonData.name}</Text>
      <Image
        {...pokemon_img}
        src={pokemonData.image}
        alt={pokemonData.name + " image"}
      />
      <Box>
        {pokemonCount !== 0 && <Text {...pokemon_count}>{pokemonCount}x</Text>}
      </Box>
    </Box>
  );
};

const pokemon_container = {
  display: "flex",
  flexDir: "column",
  boxShadow: "base",
  rounded: "md",
  cursor: "pointer",
};

const pokemon_name = {
  fontWeight: "bold",
  lineHeight: "tight",
  textTransform: "capitalize",
  textAlign: "center",
  padding: "12px 12px 0px 12px",
  color: "black",
};

const pokemon_img = {
  width: "90%",
  display: "block",
  margin: "auto",
};

const pokemon_count = {
  textAlign: "center",
  fontWeight: "bold",
  lineHeight: "tight",
  padding: "10px",
  zIndex: "popover",
};

export default WildPokemon;
