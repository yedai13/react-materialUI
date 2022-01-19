import { Button, Grid, InputBase } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import grafizona from "../img/grafizona.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  carritoButton: {
    width: 210,
    height: 25,
    marginBottom: 5,
    marginTop: 5,
    padding: 4,
    backgroundColor: "#9D9D9D",
    borderRadius: 0,
    color: "white",

    "&:hover": {
      backgroundColor: "#CCC",
    },
  },
  navGrid: {
    marginTop: 20,
  },
  logo: {
    width: 318,
    height: 40,
  },
  search: {
    width: 204,
    height: 13,
    padding: 10,
    border: "2px solid #ccc",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    border: "2px solid #ccc",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: 204,
    height: 13,
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavGrafizona = () => {
  const { carritoButton, navGrid, logo, inputRoot, inputInput } = useStyles();
  return (
    <Grid container className={navGrid}>
      <Grid item lg={3}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: inputRoot,
            input: inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Grid>
      <Grid item lg={6}>
        {" "}
        <img src={grafizona} alt="logo grafizona" className={logo} />
      </Grid>

      <Grid item lg={3}>
        <Button className={carritoButton}>
          {" "}
          <ShoppingCart /> Carrito (0) 0$
        </Button>
      </Grid>
    </Grid>
  );
};

export default NavGrafizona;
