import React, { useEffect, useState } from "react";
import {
  Toolbar,
  Box,
  Link,
  IconButton,
  Drawer,
  MenuItem,
  Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import NavGrafizona from "./NavGrafizona";
import CuotasHeader from "./CuotasHeader";
import grafizona from "../img/grafizona.png";

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

  linkToggleMenu: {
    width: "32vw",
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
  linkMenuToggleSelected: {
    width: "32vw",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    color: "#242424",
    borderBottom: "2px solid #242424",
    "&:hover": {
      textDecoration: "none",
      color: "#CCC",
      borderBottom: "2px solid #ccc",
    },
  },
  boxMenu: {
    margin: "auto",
  },
  boxToggleMenu: {
    margin: 0,
  },
  itemsMenu: {
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 25,
    width: "50vw",
    borderBottom: "1px solid #ccc",
    alignItems: "center",
  },
  imgGrafizona: {
    marginTop: 20,
  },
  iconToggle: {
    color: "black",
    fontSize: 35,
    fontWeight: "bold",
  },
  toolbarToggleMenu: {
    padding: 0,
  },
}));

const NavBar = () => {
  const [state, setState] = useState({
    toggleMenu: false,
    toggleMenuOpen: false,
  });

  const { toggleMenu, toggleMenuOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
        : setState((prevState) => ({ ...prevState, toggleMenu: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const {
    boxMenu,
    boxToggleMenu,
    iconToggle,
    imgGrafizona,
    itemsMenu,
    linkMenu,
    linkMenuSelected,
    linkMenuToggleSelected,
    linkToggleMenu,
    toolbarToggleMenu,
  } = useStyle();

  const displayToggleMenu = () => {
    const handleToggleMenuOpen = () => {
      setState((prevState) => ({ ...prevState, toggleMenuOpen: true }));
    };

    const handleToggleMenuClose = () => {
      setState((prevState) => ({ ...prevState, toggleMenuOpen: false }));
    };
    return (
      <Box>
        <Toolbar>
          <IconButton {...{ onClick: handleToggleMenuOpen }}>
            <MenuIcon className={iconToggle} />
          </IconButton>
          INICIO
          <Drawer
            {...{
              anchor: "left",
              open: toggleMenuOpen,
              onClose: handleToggleMenuClose,
            }}
          >
            <div>{getToggleMenuOptions()}</div>
          </Drawer>
        </Toolbar>

        <Toolbar className={toolbarToggleMenu}>
          <Box className={boxToggleMenu}>
            <Link
              component="button"
              variant="body1"
              className={linkMenuToggleSelected}
            >
              INICIO
            </Link>
            {["PRODUCTOS", "CARRITO"].map((menuOption) => (
              <Link
                key={menuOption}
                component="button"
                variant="body1"
                className={linkToggleMenu}
              >
                {menuOption.toUpperCase()}
              </Link>
            ))}
          </Box>
        </Toolbar>

        <CuotasHeader />

        <img src={grafizona} alt="grafizona" className={imgGrafizona} />
      </Box>
    );
  };

  const getToggleMenuOptions = () => {
    return (
      <Box>
        {[
          "Contacto",
          "TALLES",
          "Politica de Devolución",
          "ENVIO GRATIS INFO",
          "EFECTIVO 20%",
          "MOTOENVIO",
        ].map((menuOption) => (
          <MenuItem className={itemsMenu}>{menuOption}</MenuItem>
        ))}
      </Box>
    );
  };

  const displayLargeMenu = () => {
    return (
      <Box>
        <CuotasHeader />

        <Container>
          <NavGrafizona />
          <Toolbar>
            <Box className={boxMenu}>
              <Link
                component="button"
                variant="body1"
                className={linkMenuSelected}
              >
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
        </Container>
      </Box>
    );
  };

  return <div>{toggleMenu ? displayToggleMenu() : displayLargeMenu()}</div>;
};

export default NavBar;
