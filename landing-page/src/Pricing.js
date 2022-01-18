import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import PricingOption from "./PricingOption";

const Pricing = () => {
  return (
    <Container>
      <Typography variant="h2">Pricing</Typography>
      <Grid container>
        <Grid item>
          <PricingOption />
        </Grid>

        <Grid item></Grid>

        <Grid item></Grid>
      </Grid>
    </Container>
  );
};

export default Pricing;
