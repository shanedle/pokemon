import { Flex, Image, Button, Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { MdCatchingPokemon } from "react-icons/md";

import PokemonLogo from "../asset/pokemon-logo.svg";
import { usePokemon } from "../context/PokemonContext";

const Header = () => {
  const { myPokemon } = usePokemon();
  const history = useHistory();

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      as="nav"
      my={8}
      px={4}
    >
      <Image
        onClick={() => history.push(`/`)}
        src={PokemonLogo}
        cursor="pointer"
        alt="logo"
        width="120px"
        height="50px"
      />
      <Button
        variant={"solid"}
        size={"xl "}
        width="175px"
        onClick={() => history.push(`/mypokemon`)}
        leftIcon={<MdCatchingPokemon size={28} />}
      >
        {myPokemon.length > 0 && <Box> My Pokémon {myPokemon.length}</Box>}
      </Button>
    </Flex>
  );
};

export default Header;
