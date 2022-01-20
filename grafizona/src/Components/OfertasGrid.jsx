import React from "react";
import { Grid } from "@material-ui/core";
import ItemOfertas from "./ItemOfertas";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import PaymentIcon from "@material-ui/icons/Payment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fontSize: 40,
  },
  gridLine: {
    borderRight: "1px solid #000",
    [theme.breakpoints.down(1000)]: {
      border: 0,
    },
  },
  gridContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
}));

const OfertasGrid = () => {
  const { iconStyle, gridLine, gridContainer } = useStyles();
  return (
    <Grid container className={gridContainer}>
      <Grid item lg={4} md={4} sm={12} xs={12} className={gridLine}>
        <ItemOfertas
          title=" 20% OFF PAGANDO EN EFECTIVO!"
          description="Retirando por el taller o por MotoEnvio (Enviamos con prioridad)"
          icon={<AttachMoneyIcon className={iconStyle} />}
        />
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12} className={gridLine}>
        <ItemOfertas
          title="AHORA 3"
          description="Compra paga en 3 coutas sin interes!"
          icon={<PaymentIcon className={iconStyle} />}
        />
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12}>
        <ItemOfertas
          title="ENVIOS A TODO EL PAIS!"
          description="Aahora también enviamos por Correo Argentino"
          icon={<LocalShippingIcon className={iconStyle} />}
        />
      </Grid>
    </Grid>
  );
};

export default OfertasGrid;
