import styled from "@emotion/styled";
import LinkedInIcon from "@/src/components/icons/socials/LinkedIn";
import theme from "@/public/static/themes";

export const StyledNav = styled("nav")({
  display: "flex",
  backgroundColor: "#1B3764",
  paddingInline: "16%",
  paddingTop: 30
});

export const LogoAndSocial = styled("div")({
  display: "flex"
});

export const Socials = styled("div")({
  display: "flex",
  columnGap: 10,
  padding:10
});