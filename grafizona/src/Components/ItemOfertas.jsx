import React from "react";
import { Grid, Typography } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
}));

const ItemOfertas = () => {
  const { icon, title } = useStyles();
  return (
    <Grid container>
      <Grid item lg={2}>
        <AttachMoneyIcon className={icon} />
      </Grid>
      <Grid item lg={10}>
        <Typography align="left" className={title}>
          20% OFF PAGANDO EN EFECTIVO!
        </Typography>
        <Typography align="left">
          Retirando por el taller o por MotoEnvio (Enviamos con prioridad)
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ItemOfertas;
