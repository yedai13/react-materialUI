import React from "react";
import { Grid } from "@material-ui/core";
import ItemOfertas from "./ItemOfertas";

const OfertasGrid = () => {
  return (
    <Grid container>
      <Grid item lg={4}>
        <ItemOfertas />
      </Grid>
      <Grid item lg={4}>
        <ItemOfertas />
      </Grid>
      <Grid item lg={4}>
        <ItemOfertas />
      </Grid>
    </Grid>
  );
};

export default OfertasGrid;
