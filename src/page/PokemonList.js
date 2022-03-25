/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Container, Skeleton, SimpleGrid } from "@chakra-ui/react";

import { GET_POKEMONS } from "../queries";
import WildPokemon from "../component/WildPokemon";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 20;

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const { data } = useQuery(GET_POKEMONS, {
    variables: {
      limit: LIMIT,
      offset: offset,
    },
  });

  useEffect(() => {
    if (data) {
      setPokemonData([...pokemonData, ...data.pokemons.results]);
      if (data.pokemons.results.length === 0) {
        setHasMore(false);
      }
    }
  }, [data]);

  return (
    <Container maxW="container.xl">
      <InfiniteScroll
        dataLength={pokemonData.length}
        next={() => setOffset(offset + LIMIT)}
        hasMore={hasMore}
        loader={
          <SimpleGrid
            columns={{ sm: 2, md: 5 }}
            marginTop="30px"
            spacing="20px"
          >
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
            <Skeleton height="100px" />
          </SimpleGrid>
        }
      >
        <SimpleGrid columns={{ sm: 2, md: 5 }} marginTop="30px" spacing="20px">
          {pokemonData.map((pokemon) => (
            <WildPokemon key={pokemon.id} pokemonData={pokemon} />
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Container>
  );
}

export default PokemonList;
