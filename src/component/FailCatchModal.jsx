import { css } from "@emotion/css";
import Modal from "./Modal";

export default function FailCatchModal({ isShow, onClick, pokemonName }) {
  return (
    <Modal show={isShow}>
      <div className={styles.container}>
        <p className={styles.title}>Oh no! The wild {pokemonName} fled.</p>
        <button className={styles.button} onClick={onClick}>
          Okay
        </button>
      </div>
    </Modal>
  );
}

const styles = {
  container: css`
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
  `,
  title: css`
    padding: 1rem;
    margin-top: 0;
  `,
  button: css`
    padding: 0.5rem;
    margin: 0;
    text-align: center;
    border-radius: 100px;
    background-color: #ffcb05;
    display: block;
    width: 100%;
  `,
};
