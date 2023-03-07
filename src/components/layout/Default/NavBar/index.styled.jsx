import styled from "@emotion/styled";
import theme from "@/public/static/themes";
import Link from "next/link";

export const StyledNav = styled("nav")({
  display: "flex",
  backgroundColor: "#1B3764",
  paddingInline: "13%",
  paddingTop: 30
});

export const LogoAndSocial = styled("div")({
  display: "flex"
});

export const Socials = styled("div")({
  display: "flex",
  columnGap: 10,
  marginLeft: 33
});
export const StyledLink = styled(Link)({
  color: theme.palette.white.main,
  fontSize: 17,
  textDecoration: "none",
  fontFamily: "Inter, sans-serif",
  ":hover": {
    color: theme.palette.secondary.main
  }
});
export const NavLinks = styled("div")({
  display: "flex",
  marginLeft: "auto",
  alignItems: "center",
  columnGap: 30,
});