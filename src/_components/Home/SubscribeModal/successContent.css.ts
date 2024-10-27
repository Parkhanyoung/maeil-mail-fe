import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const successText = style({
  fontSize: "1.5rem",
  textAlign: "center",
  margin: "2rem 0",
  lineHeight: "2rem",
  wordBreak: "keep-all",
});

export const title = style({
  fontSize: "1.6rem",
  fontWeight: 600,
  textAlign: "center",
});

export const buttonSection = style({
  display: "flex",
  gap: "1rem",
});
