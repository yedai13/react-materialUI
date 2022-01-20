import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ItemStoreGrid from "./ItemStoreGrid";
import akira from "../img/akira-remera.jpg";
import titancoloso from "../img/titancoloso.jpg";
import boarding from "../img/boarding.jpg";
import encoding from "../img/encoding.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titulo: {
    marginTop: 50,
    marginBottom: 40,
    fontWeight: "bold",
    letterSpacing: 0.2,
  },
  subtitulo: {
    marginBottom: 40,
  },
}));

const StoreGrid = () => {
  const { titulo, subtitulo } = useStyles();
  return (
    <Container>
      <Typography variant="h5" className={titulo}>
        TODO LO PUBLICADO SE ENCUENTRA EN STOCK.
      </Typography>
      <Typography className={subtitulo}>
        Si sos de zona Caba o GBA podes acceder a un 20% OFF extra abonando en
        efectivo al recibir o retirando el producto por nuetro taller.
      </Typography>
      <Grid container>
        <Grid
          item
          container
          justifyContent="center"
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          <ItemStoreGrid
            title="AKIRA 2 - REMERA ESTILO ANIME"
            image={akira}
            price={2790}
          />
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          <ItemStoreGrid
            title="REMERA COLOSSUS ESTILO SKN"
            image={titancoloso}
            price={2330}
          />
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          <ItemStoreGrid
            title="REMERA BOARDING PASS"
            image={boarding}
            price={2590}
          />
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          <ItemStoreGrid
            title="REMERA ENCODING THE SKY"
            image={encoding}
            price={2790}
          />
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          <ItemStoreGrid
            title="AKIRA 2 - REMERA ESTILO ANIME"
            image={akira}
            price={2790}
          />
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          <ItemStoreGrid
            title="REMERA COLOSSUS ESTILO SKN"
            image={titancoloso}
            price={2330}
          />
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          <ItemStoreGrid
            title="REMERA BOARDING PASS"
            image={boarding}
            price={2590}
          />
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
          <ItemStoreGrid
            title="REMERA ENCODING THE SKY"
            image={encoding}
            price={2790}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StoreGrid;
