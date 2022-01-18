import React from "react";
import { Grid } from "@material-ui/core";
import MainGridItem from "./MainGridItem";
import ProductInformation from "./ProductInformation";
import Pricing from "./Pricing";
import Footer from "./Footer";

const GridLayout = () => {
  return (
    <Grid container>
      <Grid item lg={12}>
        <MainGridItem />
      </Grid>

      <Grid item lg={12}>
        <ProductInformation />
      </Grid>

      <Grid item lg={12}>
        <Pricing />
      </Grid>

      <Grid item lg={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default GridLayout;
