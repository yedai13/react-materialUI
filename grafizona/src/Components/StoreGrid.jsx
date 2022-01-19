import { Container, Grid } from "@material-ui/core";
import React from "react";
import ItemStoreGrid from "./ItemStoreGrid";

const StoreGrid = () => {
  return (
    <Container>
      <Grid container>
        <Grid item lg={3}>
          <ItemStoreGrid />
        </Grid>

        <Grid item lg={3}></Grid>

        <Grid item lg={3}></Grid>

        <Grid item lg={3}></Grid>
      </Grid>
    </Container>
  );
};

export default StoreGrid;
