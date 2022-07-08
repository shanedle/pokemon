import React from "react";
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Text,
} from "@chakra-ui/react";

const PokemonAbilitiesMeasurements = ({ height, weight, abilities }) => {
  return (
    <Box w="full">
      <StatGroup {...pokemon_container}>
        <Stat position="initial">
          <StatLabel>Height</StatLabel>
          <StatNumber>{height + '"'}</StatNumber>
        </Stat>
        <Stat position="initial">
          <StatLabel>Weight</StatLabel>
          <StatNumber>{weight + "lbs"}</StatNumber>
        </Stat>
        <Stat position="initial">
          <StatLabel>Abilities</StatLabel>
          <Text {...pokemon_abilities}>{abilities}</Text>
        </Stat>
      </StatGroup>
    </Box>
  );
};

const pokemon_container = {
  boxShadow: "inset 0 0 0 1px #e1e1e1",
  borderRadius: "5px",
  padding: "20px",
  textAlign: "center",
};

const pokemon_abilities = {
  textTransform: "capitalize",
  textAlign: "center",
  fontSize: "2xl",
  fontWeight: "semibold",
};

export default PokemonAbilitiesMeasurements;
