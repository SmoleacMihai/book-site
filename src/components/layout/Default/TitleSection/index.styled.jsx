import theme from "@/public/static/themes";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledSection = styled("section")({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyItems: "center",
  flexDirection: "column",
  textAlign: "center",
  rowGap: 28,
  paddingTop: 100,
  paddingBottom: 100,
});

export const Title = styled(Typography)({
  fontSize: 50,
  color: theme.palette.white.main,
  fontFamily: "Cardo, sans-serif"
});

export const Line = styled("div")({
  height: 6,
  width: 55,
  backgroundColor: theme.palette.secondary.main,
  placeSelf: "center"
});

export const TitleMessage = styled(Typography)({
  fontSize: 19,
  color: theme.palette.gray10.main,
  marginInline: "30%",
  wordWrap: "break-word"
});