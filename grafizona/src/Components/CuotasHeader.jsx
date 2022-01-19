import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cuotas: {
    color: "#fff",
    backgroundColor: "#000",
    paddingTop: 10,
    paddingBottom: 10,
  },
}));

const CuotasHeader = () => {
  const { cuotas } = useStyles();
  return (
    <header>
      <Typography className={cuotas}>
        3 CUOTAS SIN INTERES-ENVIO GRATIS A PARTIR DE $5000-Dependiendo de los
        procesos de produccion el paquete puede llegar antes de la fecha
        indicada
      </Typography>
    </header>
  );
};

export default CuotasHeader;
