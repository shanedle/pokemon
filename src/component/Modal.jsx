import { Box } from "@chakra-ui/react";

export default function Modal({ show, children }) {
  if (!show) return null;

  return <Box {...modal_styles}>{children}</Box>;
}

const modal_styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  zIndex: "10",
  background: "rgba(0, 0, 0, 0.4)",
  top: "0",
  bottom: "0",
  right: "0",
  left: "0",
  padding: "1rem",
};
