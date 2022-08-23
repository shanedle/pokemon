import { useState } from "react";
import { css } from "@emotion/css";
import { Image, Text, Button } from "@chakra-ui/react";

import Modal from "./Modal";
import PokeBall from "../assets/pokeball.svg";

export default function SuccessCatchModal({ isShow, onClick, pokemonName }) {
  const [nickname, setNickname] = useState("");

  const savePokemon = () => {
    onClick(nickname);
    setNickname("");
  };

  return (
    <Modal show={isShow}>
      <form className={styles.container} onSubmit={savePokemon}>
        <Text {...modal_text}>Gotcha! {pokemonName} was caught!</Text>

        <Image {...modal_image} src={PokeBall} alt="pokeball" />
        <input
          className={styles.input}
          type="text"
          value={nickname}
          required
          placeholder="Nickname"
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button {...modal_button} type="submit">
          Okay
        </Button>
      </form>
    </Modal>
  );
}

const modal_image = {
  width: "12rem",
  display: "flex",
  margin: "auto",
  marginBottom: "1rem",
};

const modal_text = {
  padding: "1rem",
  margin: "0",
  textAlign: "center",
  fontWeight: "700",
  textTransform: "capitalize",
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

const styles = {
  container: css`
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
  `,
  input: css`
    width: 100%;
    display: block;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
    border-style: solid;
  `,
};
