import { Box, Text, Button } from "@chakra-ui/react";

import Modal from "./Modal";

export default function FailCatchModal({ isShow, onClick, pokemonName }) {
  return (
    <Modal show={isShow}>
      <Box {...modal_container}>
        <Text {...modal_text}>Oh no! The wild {pokemonName} fled.</Text>
        <Button {...modal_button} onClick={onClick}>
          Okay
        </Button>
      </Box>
    </Modal>
  );
}

const modal_container = {
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "1rem",
};

const modal_text = {
  padding: "1rem",
  marginTop: "0",
};

const modal_button = {
  padding: "0.5rem",
  margin: "0",
  textAlign: "center",
  borderRadius: "100px",
  backgroundColor: "#ffcb05",
  display: "block",
  width: "100%",
};
