import { useState, useEffect } from "react";
import { Flex, VStack, Box, Text, Image, Button } from "@chakra-ui/react";

import { usePokemon } from "../../context/PokemonContext";
import { catchAction } from "../../context/PokemonReducer";

import { PokemonColors } from "../../constants/PokemonColors";

import PokemonTypes from "./PokemonTypes";
import PokemonAbilitiesMeasurements from "./PokemonAbilitiesMeasurements";
import PokemonStats from "./PokemonStats";
import PokemonMoves from "./PokemonMoves";

import FailCatchModal from "../FailCatchModal";
import SuccessCatchModal from "../SuccessCatchModal";

import PokeBall from "../../asset/pokeball.svg";

const section_title = {
  fontWeight: "Bold",
  fontSize: "24px",
};

const pokemon_img = {
  display: "block",
  boxSize: "400px",
  m: "auto",
};

const pokemon_name = {
  fontWeight: "Bold",
  fontSize: "36px",
  margin: "20px 5px 5px",
  textTransform: "capitalize",
  textAlign: "center",
};

const button_container = {
  justify: "space-between",
  overflow: "hidden",
  position: "fixed",
  bottom: "0",
  width: "100%",
  left: "0",
  wrap: "wrap",
  padding: "1rem 0",
};

const button_img = {
  boxShadow: "xl",
  borderRadius: "full",
  cursor: "pointer",
  height: "30px",
  width: "30px",
  alt: "Catch Pokemon",
};

const PokemonDetail = ({ pokemonData }) => {
  const { myPokemon, dispatch } = usePokemon();
  const [showModal, setShowModal] = useState(null);
  const [img, setImg] = useState("front_default");

  useEffect(() => {
    let timer = setTimeout(() => {
      img === "front_default"
        ? setImg("back_default")
        : setImg("front_default");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [img]);

  const abilities = pokemonData.abilities
    .map(({ ability }) => ability.name)
    .join(", ");

  const pokemonCount = myPokemon.filter(
    (pokemon) => pokemon.name === pokemonData.name
  ).length;

  const catchPokemon = () => {
    const success = Math.round(Math.random());
    success ? setShowModal("success") : setShowModal("fail");
  };

  const dismissModal = () => {
    setShowModal(null);
  };

  const saveToCollection = (nickname) => {
    const caughtPokemon = {
      id: new Date().getTime(),
      name: pokemonData.name,
      sprites: pokemonData.sprites,
      nickname: nickname,
    };
    dispatch(catchAction(caughtPokemon));
    dismissModal();
  };

  return (
    <>
      <Text {...pokemon_name}>{pokemonData.name}</Text>

      <Flex
        h={{ base: "auto", md: "100vh" }}
        direction={{ base: "column", md: "row" }}
      >
        <VStack w="full" h="full" p={5} spacing={5} alignItems="flex-start">
          <Box w="full" bgColor={PokemonColors[pokemonData.types[0].type.name]}>
            <Image
              {...pokemon_img}
              src={pokemonData.sprites[img]}
              alt={pokemonData.name}
            />
          </Box>
          <PokemonAbilitiesMeasurements
            height={pokemonData.height}
            weight={pokemonData.weight}
            abilities={abilities}
          />
          {pokemonCount !== 0 && (
            <Text {...section_title}>Owned: {pokemonCount}</Text>
          )}
        </VStack>

        <VStack w="full" h="full" p={5} spacing={5} alignItems="flex-start">
          <Text {...section_title}>Type</Text>
          <PokemonTypes typeList={pokemonData.types} />
          <Text {...section_title}>Stats</Text>
          <PokemonStats statList={pokemonData.stats} />
          <Text {...section_title}>Moves</Text>
          <PokemonMoves movesList={pokemonData.moves} />
          <FailCatchModal
            pokemonName={pokemonData.name}
            isShow={showModal === "fail"}
            onClick={dismissModal}
          />
          <SuccessCatchModal
            pokemonName={pokemonData.name}
            isShow={showModal === "success"}
            onClick={saveToCollection}
          />
        </VStack>
      </Flex>

      <Flex {...button_container}>
        <Box onClick={catchPokemon} margin="auto">
          <Flex align="center">
            <Button
              bg="#1ECBE1"
              boxShadow="base"
              borderRadius="full"
              height="unset"
              padding="13px 26px"
              textTransform="capitalize"
              _hover={{
                bg: "#18DFDF",
              }}
              leftIcon={<Image {...button_img} src={PokeBall} />}
            >
              Catch {pokemonData.name}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default PokemonDetail;
