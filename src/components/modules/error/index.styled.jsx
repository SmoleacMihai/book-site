import styled from "@emotion/styled";
import img from "@/public/assets/images/errorPageBackground.jpg"
import { Button, Typography } from "@mui/material";
import theme from "@/public/static/themes";

export const StyledSection = styled("section")({
  display: "flex",
  rowGap: 35,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${img.src})`,
  backgroundSize:"contain",
  height: 636
});

export const MessageTitle = styled(Typography)({
  fontSize: 40,
  color: theme.palette.primary.main,
  fontWeight: 700
});

export const Message = styled("div")({
  fontSize: 14,
  color: "#969AA0",
  fontFamily: "Inter, sans-serif",
  marginInline: "33%",
  wordWrap: "break-word",
  textAlign: "center"
});