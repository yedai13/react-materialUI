import React from "react";
import { Grid } from "@material-ui/core";
import MainGridItem from "./MainGridItem";
import ProductInformation from "./ProductInformation";

const GridLayout = () => {
  return (
    <Grid container>
      <Grid item lg={12}>
        <MainGridItem />
      </Grid>

      <Grid item lg={12}>
        <ProductInformation />
      </Grid>
    </Grid>
  );
};

export default GridLayout;
