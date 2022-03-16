import { useState, useEffect } from "react";
import { Flex, VStack, Box, Button, Text, Image } from "@chakra-ui/react";

import { usePokemon } from "../../context/PokemonContext";
import { catchAction } from "../../context/PokemonReducer";

import { PokemonColors } from "../../constants/PokemonColors";

import PokemonTypes from "./PokemonTypes";
import PokemonAbilitiesMeasurements from "./PokemonAbilitiesMeasurements";
import PokemonStats from "./PokemonStats";
import PokemonMoves from "./PokemonMoves";

import FailCatchModal from "../FailCatchModal";
import SuccessCatchModal from "../SuccessCatchModal";

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

const section_title = {
  fontWeight: "Bold",
  fontSize: "24px",
  margin: "20px 5px 5px",
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
    const catchedPokemon = {
      id: new Date().getTime(),
      name: pokemonData.name,
      sprites: pokemonData.sprites,
      nickname: nickname,
    };
    dispatch(catchAction(catchedPokemon));
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
          <Button onClick={catchPokemon}>Catch</Button>
          <Text {...section_title}>Type</Text>
          <PokemonTypes typeList={pokemonData.types} />
          <Text {...section_title}>Stats</Text>
          <PokemonStats statList={pokemonData.stats} />
          <Text {...section_title}>Moves</Text>
          <PokemonMoves movesList={pokemonData.moves} />
          <FailCatchModal
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
    </>
  );
};

export default PokemonDetail;
