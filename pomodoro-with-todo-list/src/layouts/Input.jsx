import { styled } from "@stitches/react";
import { schema } from "../configs/theme";

export const Input = styled('input', {
  border: `1px solid ${schema.gray1}`,
  padding: ".75rem 1rem",
  borderRadius: ".5rem",
  display: "block",
  width: "100%"
})