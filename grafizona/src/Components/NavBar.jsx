import React from "react";
import { Toolbar, Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  linkMenu: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    color: "#242424",

    "&:hover": {
      textDecoration: "none",
      color: "#CCC",
    },
  },
  linkMenuSelected: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    color: "#242424",
    borderTop: "1px solid #242424",
    borderBottom: "1px solid #242424",
    "&:hover": {
      textDecoration: "none",
      color: "#CCC",
      borderTop: "1px solid #ccc",
      borderBottom: "1px solid #ccc",
    },
  },
  boxMenu: {
    margin: "auto",
  },
}));

const NavBar = () => {
  const { linkMenu, linkMenuSelected, boxMenu } = useStyle();
  return (
    <Toolbar>
      <Box className={boxMenu}>
        <Link component="button" variant="body1" className={linkMenuSelected}>
          INICIO
        </Link>
        {[
          "PRODUCTOS",
          "CONTACTO",
          "TALLES",
          "POLITICA DE DEVOLUCIÓN",
          "ENVIO GRATIS",
          "EFECTIVO 20%",
          "MOTOENVIO",
        ].map((menuOption) => (
          <Link
            key={menuOption}
            component="button"
            variant="body1"
            className={linkMenu}
          >
            {menuOption.toUpperCase()}
          </Link>
        ))}
      </Box>
    </Toolbar>
  );
};

export default NavBar;
