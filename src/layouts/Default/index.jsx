import NavBar from "@/components/layout/Default/NavBar";
import TitleSection from "@/src/components/layout/Default/TitleSection";

const DefaultLayout = ({ children, title, titleMessage }) => {
  return (
    <>
      <NavBar />
      {title && <TitleSection title={title} titleMessage={titleMessage}/>}
      {children}
    </>
  );
}

export default DefaultLayout;