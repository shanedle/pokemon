import { Box, Container, Text } from "@chakra-ui/react";

import OwnedPokemon from "../component/OwnedPokemon";
import { usePokemon } from "../context/PokemonContext";

const MyPokemon = () => {
  const { myPokemon } = usePokemon();

  return (
    <Container maxW="container.xl">
      {myPokemon.length > 0 && (
        <>
          {myPokemon.map((pokemon) => (
            <OwnedPokemon key={pokemon.id} pokemonData={pokemon} />
          ))}
        </>
      )}

      {myPokemon.length <= 0 && (
        <>
          <Box textAlign="center" marginTop="30px">
            <Text>You Don't Have any Pokemon!</Text>
            <Text fontWeight="bold"> Let's catch the Wild Pokemon!</Text>
          </Box>
        </>
      )}
    </Container>
  );
};

export default MyPokemon;
