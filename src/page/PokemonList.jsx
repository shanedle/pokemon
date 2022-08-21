import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Container,
  Skeleton,
  SimpleGrid,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { MdOutlineArrowUpward } from "react-icons/md";

import { GET_POKEMONS } from "../queries";
import WildPokemon from "../component/WildPokemon";

const LIMIT = 20;

export default function PokemonList() {
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
      <Box {...button_container}>
        <IconButton
          aria-label="Scroll to top"
          icon={<MdOutlineArrowUpward />}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        />
      </Box>
    </Container>
  );
}

const button_container = {
  position: "fixed",
  bottom: "0",
  right: "0",
  padding: "1rem 1rem",
};
