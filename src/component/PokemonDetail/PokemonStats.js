import React from "react";
import { Text, Box, Progress, Grid } from "@chakra-ui/react";

const PokemonStats = ({ statList }) => {
  return (
    <Box w="full">
      {statList.map((stat) => (
        <Box key={stat.stat.name}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box w="100%">
              <Text {...stat_name}>{stat.stat.name}</Text>
            </Box>
            <Box w="100%">
              <Text {...stat_value}>{stat.base_stat}</Text>
            </Box>
          </Grid>
          <Progress {...progress_style} value={stat.base_stat} />
        </Box>
      ))}
    </Box>
  );
};

const progress_style = {
  marginTop: "5px",
  position: "inherit",
  colorScheme: "teal",
  size: "xs",
};

const stat_value = {
  textTransform: "uppercase",
  textAlign: "right",
};

const stat_name = {
  textTransform: "uppercase",
};

export default PokemonStats;
