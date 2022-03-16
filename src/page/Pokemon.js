import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Container, Skeleton, SkeletonText } from "@chakra-ui/react";

import { GET_POKEMON } from "../queries";
import PokemonDetail from "../component/PokemonDetail/PokemonDetail";

const Pokemon = () => {
  const { pokemon } = useParams();

  const { data, loading } = useQuery(GET_POKEMON, {
    variables: {
      name: pokemon,
    },
  });

  if (loading || data.pokemon.id === null)
    return (
      <Container maxW="container.xl">
        <Skeleton height="100px" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Container>
    );

  return (
    <Container maxW="container.xl">
      <PokemonDetail pokemonData={data.pokemon} />
    </Container>
  );
};

export default Pokemon;
