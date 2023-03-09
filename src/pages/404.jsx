import ErrorStatusPageNotFound from "@/src/components/modules/error/body/404";
import { Message, MessageTitle, StyledSection } from "@/src/components/modules/error/index.styled";
import DefaultLayout from "@/src/layouts/Default";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  const navigateToHome = () => {
    router.push("/")
  }

  return ( 
    <DefaultLayout title={"Page Error"} titleMessage={"Oops!"}>
      <StyledSection>
        <ErrorStatusPageNotFound/>
        <MessageTitle>Page not found!!!</MessageTitle>
        <Message>The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</Message>
        <Button onClick={navigateToHome}>Back To Home</Button>
      </StyledSection>
    </DefaultLayout> 
  );
}
export default ErrorPage;