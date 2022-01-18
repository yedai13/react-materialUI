import React from "react";
import { Grid } from "@material-ui/core";
import MainGridItem from "./MainGridItem";

const GridLayout = () => {
  return (
    <Grid container>
      <Grid item>
        <MainGridItem />
      </Grid>

      <Grid item></Grid>
    </Grid>
  );
};

export default GridLayout;
