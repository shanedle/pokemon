import { useHistory } from "react-router-dom";
import { Box, Image, Text, Button } from "@chakra-ui/react";

import { usePokemon } from "../context";
import { releaseAction } from "../context/reducer";

export default function OwnedPokemon({ pokemonData }) {
  const { dispatch } = usePokemon();
  const history = useHistory();

  const goToPokemon = () => {
    history.push(`/${pokemonData.name}`);
  };

  return (
    <Box {...pokemon_container}>
      <Box {...pokemon_img_container} onClick={goToPokemon}>
        <Image
          {...pokemon_img}
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name + " image"}
        />
      </Box>
      <Box {...pokemon_name_container} onClick={goToPokemon}>
        <Text>{pokemonData.nickname}</Text>
        <Text>{pokemonData.name}</Text>
      </Box>
      <Button
        {...pokemon_release}
        onClick={() => dispatch(releaseAction(pokemonData.id))}
      >
        Release
      </Button>
    </Box>
  );
}

const pokemon_container = {
  display: "flex",
  backgroundColor: "white",
  boxShadow: "base",
  rounded: "md",
  marginBottom: "1rem",
};

const pokemon_img_container = {
  width: "100px",
  height: "100px",
  cursor: "pointer",
};

const pokemon_img = {
  width: "100%",
};

const pokemon_name_container = {
  textTransform: "capitalize",
  margin: "auto 0",
  flex: "1",
  padding: "1rem 0",
  cursor: "pointer",
};

const pokemon_release = {
  margin: "auto 1rem auto 0",
  padding: "0.4rem 0.75rem",
  justifyContent: "center",
  rounded: "md",
  backgroundColor: "#fd4c61",
  color: "white",
  fontWeight: "bold",
};
