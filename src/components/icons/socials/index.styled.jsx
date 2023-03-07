import styled from "@emotion/styled";
import theme from "@/public/static/themes";

export const StyledSvg= styled("svg")({
  "&.forNav": {
    "rect": {
      fill: "white",
    }
  },
  "&.forNav:hover":{
    cursor: "pointer",
    outline:`1px solid ${theme.palette.secondary.main}`, 
    "rect": {
      fill: theme.palette.primary.main,
    },
    "path": {
      fill:"white",
    }
  }
});