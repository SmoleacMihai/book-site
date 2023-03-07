import { LogoAndSocial, NavLinks, Socials, StyledLink, StyledNav } from "@/components/layout/Default/NavBar/index.styled";
import Brand from "@/components/common/Logo";
import LinkedInIcon from "@/src/components/icons/socials/LinkedIn";
import FacebookIcon from "@/components/icons/socials/Facebook";
import TwiterIcon from "@/src/components/icons/socials/Twiter";

const NavBar = () => {
  return (
    <StyledNav>
      <LogoAndSocial>
        <Brand />
        <Socials>
          <FacebookIcon className={"forNav"} />
          <TwiterIcon className={"forNav"} />
          <LinkedInIcon className={"forNav"} />
        </Socials>
      </LogoAndSocial>
      <NavLinks>
        <StyledLink href={"/"}>Home</StyledLink>
        <StyledLink href={"/"}>Pages</StyledLink>
        <StyledLink href={"/about"}>About</StyledLink>
        <StyledLink href={"/services"}>Services</StyledLink>
        <StyledLink href={"/contact"}>Contact</StyledLink>
      </NavLinks>

    </StyledNav>
  );
}

export default NavBar;