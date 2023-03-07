import { Logo, LogoText } from "@/components/common/Logo/index.styled";
import LogoIcon from "@/src/components/icons/Logo";

const Brand = () => {
  return (  
    <Logo>
      <LogoIcon/>
      <LogoText>Pages</LogoText>
    </Logo>
  );
}
 
export default Brand;