import React from "react";
import { Box, Badge } from "@chakra-ui/react";

import { PokemonColors } from "../../constants/PokemonColors";

const badge_type = {
  variant: "solid",
  mr: "10px",
  px: "30px",
  textTransform: "capitalize",
  fontSize: "xl",
};

const PokemonTypes = ({ typeList }) => {
  return (
    <Box>
      {typeList.map((type) => (
        <Badge
          {...badge_type}
          bgColor={PokemonColors[type.type.name]}
          key={type.type.name}
        >
          {type.type.name}
        </Badge>
      ))}
    </Box>
  );
};

export default PokemonTypes;
