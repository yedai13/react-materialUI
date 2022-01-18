import React from "react";
import { Grid } from "@material-ui/core";
import MainGridItem from "./MainGridItem";
import ProductInformation from "./ProductInformation";

const GridLayout = () => {
  return (
    <Grid container>
      <Grid item>
        <MainGridItem />
      </Grid>

      <Grid item>
        <ProductInformation />
      </Grid>
    </Grid>
  );
};

export default GridLayout;
