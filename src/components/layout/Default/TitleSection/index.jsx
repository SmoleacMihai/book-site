import { Line, StyledSection, Title, TitleMessage } from "@/src/components/layout/Default/TitleSection/index.styled";

const TitleSection = ({title, titleMessage}) => {
  return ( 
    <StyledSection>
      <Title>{title}</Title>
      <Line />
      {titleMessage && <TitleMessage>{titleMessage}</TitleMessage>}
    </StyledSection> 
  );
}
 
export default TitleSection;