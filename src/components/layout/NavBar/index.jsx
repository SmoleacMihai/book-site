import { LogoAndSocial, Socials, StyledLinkedIn, StyledNav } from "@/components/layout/NavBar/index.styled";
import Brand from "@/components/common/Logo";
import LinkedInIcon from "@/src/components/icons/socials/LinkedIn";
import FacebookIcon from "@/components/icons/socials/Facebook";
import TwiterIcon from "@/components/icons/socials/Twiter";


const NavBar = () => {
  return (
    <StyledNav>
      <LogoAndSocial>
        <Brand/>
        <Socials>
          <FacebookIcon className={"forNav"}/>
          <TwiterIcon className={"forNav"}/>
          <LinkedInIcon className={"forNav"}/>
        </Socials>
      </LogoAndSocial>


    </StyledNav>
  );
}
 
export default NavBar;