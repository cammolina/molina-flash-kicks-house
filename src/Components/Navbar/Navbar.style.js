import { withTheme } from "@emotion/react";

const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }
  
  export const styles = {
      container: {
        display: viewport.width > 900 ? "flex" : "none",
        alignItems: "center",
        justifyContent: "space-between",
        height: 100,
        width: "100%",
        background: "lightblue"
      },
      imagenes: {
        height: "60%",
      },
      categorias: {
        margin: 10,
        color: 'black',
      },
    };