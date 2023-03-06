import { LogoAndSocial, StyledNav } from "@/components/layout/NavBar/index.styled";
import Brand from "@/components/common/Logo";


const NavBar = () => {
  return (
    <StyledNav>
      <LogoAndSocial>
        <Brand/>
      </LogoAndSocial>


    </StyledNav>
  );
}
 
export default NavBar;