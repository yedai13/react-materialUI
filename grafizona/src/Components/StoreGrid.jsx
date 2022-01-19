import { Grid } from "@material-ui/core";
import React from "react";
import ItemStoreGrid from "./ItemStoreGrid";
import akira from "../img/akira-remera.jpg";
import titancoloso from "../img/titancoloso.jpg";
import boarding from "../img/boarding.jpg";
import encoding from "../img/encoding.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  storeGrid: {
    alignSelf: "center",
    alignItems: "center",
  },
}));

const StoreGrid = () => {
  const { storeGrid } = useStyles();
  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ItemStoreGrid
          title="AKIRA 2 - REMERA ESTILO ANIME"
          image={akira}
          price={2790}
        />
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ItemStoreGrid
          title="REMERA COLOSSUS ESTILO SKN"
          image={titancoloso}
          price={2330}
        />
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ItemStoreGrid
          title="REMERA BOARDING PASS"
          image={boarding}
          price={2590}
        />
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ItemStoreGrid
          title="REMERA ENCODING THE SKY"
          image={encoding}
          price={2790}
        />
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ItemStoreGrid
          title="AKIRA 2 - REMERA ESTILO ANIME"
          image={akira}
          price={2790}
        />
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ItemStoreGrid
          title="REMERA COLOSSUS ESTILO SKN"
          image={titancoloso}
          price={2330}
        />
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ItemStoreGrid
          title="REMERA BOARDING PASS"
          image={boarding}
          price={2590}
        />
      </Grid>

      <Grid item lg={3} md={4} sm={6} xs={12}>
        <ItemStoreGrid
          title="REMERA ENCODING THE SKY"
          image={encoding}
          price={2790}
        />
      </Grid>
    </Grid>
  );
};

export default StoreGrid;
