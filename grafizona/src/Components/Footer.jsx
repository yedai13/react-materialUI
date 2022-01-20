import React from "react";
import {
  Grid,
  Toolbar,
  Box,
  Link,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PaymentIcon from "@material-ui/icons/Payment";
import { AlternateEmail, Phone, Instagram, Facebook } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  boxMenu: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    backgroundColor: "#000",
  },

  linkMenu: {
    color: "#FFF",
    paddingBottom: 4,
    paddingRight: 18,
    paddingTop: 4,
    textAlign: "left",

    "&:hover": {
      color: "#CCC",
    },
  },
  title: {
    marginTop: 20,
    color: "white",
    paddingLeft: 24,
    textAlign: "left",
  },
  iconTarjeta: {
    fontSize: 50,
    color: "white",
    textAlign: "left",
  },
}));

const Footer = () => {
  const { boxMenu, linkMenu, footer, title, iconTarjeta } = useStyles();
  return (
    <footer className={footer}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Typography variant="h6" className={title}>
              NAVEGACIÓN
            </Typography>
            <Toolbar>
              <Box className={boxMenu}>
                {[
                  "Inicio",
                  "Productos",
                  "Contacto",
                  "Talles",
                  "Politica de Devolución",
                  "Envio Gratis",
                  "Efectivo 20%",
                  "Motoenvio",
                ].map((menuOption) => (
                  <Link
                    key={menuOption}
                    component="button"
                    variant="body1"
                    className={linkMenu}
                  >
                    {menuOption}
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </Grid>

          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Typography variant="h6" className={title}>
              MEDIOS DE PAGO
            </Typography>
            <Grid container>
              <Grid item lg={3}>
                <PaymentIcon className={iconTarjeta} />
              </Grid>
              <Grid item lg={3}>
                <PaymentIcon className={iconTarjeta} />
              </Grid>
              <Grid item lg={3}>
                <PaymentIcon className={iconTarjeta} />
              </Grid>
              <Grid item lg={3}>
                <PaymentIcon className={iconTarjeta} />
              </Grid>
              <Grid item lg={3}>
                <PaymentIcon className={iconTarjeta} />
              </Grid>
              <Grid item lg={3}>
                <PaymentIcon className={iconTarjeta} />
              </Grid>
              <Grid item lg={3}>
                <PaymentIcon className={iconTarjeta} />
              </Grid>
              <Grid item lg={3}>
                <PaymentIcon className={iconTarjeta} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Typography variant="h6" className={title}>
              CONTACTANOS
            </Typography>
            <Typography align="left" className={title}>
              <Phone /> 11-1234-1234
            </Typography>
            <Typography align="left" className={title}>
              <AlternateEmail /> Email@Email.com.ar
            </Typography>
          </Grid>

          <Grid item lg={3} md={6} sm={12} xs={12}>
            <Typography variant="h6" className={title}>
              REDES SOCIALES
            </Typography>
            <Typography variant="h5" align="left" className={title}>
              <Instagram /> @Grafizona
            </Typography>
            <Typography variant="h5" align="left" className={title}>
              <Facebook /> @Grafizona
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
