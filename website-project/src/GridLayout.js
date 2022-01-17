import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainGridItem from "./MainGridItem";
import GridItem from "./GridItem";

const useStyles = makeStyles((theme) => ({
  mainGridItem: {
    backgroundColor: "blue",
  },
  secondRowFirstItem: {
    backgroundColor: "green",
  },
  secondRowSecondItem: {
    backgroundColor: "orange",
  },
  thirdRow: {
    backgroundColor: "pink",
  },
}));

const GridLayout = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item sm={12} xs={12}>
        <MainGridItem />
      </Grid>

      <Grid item sm={6} xs={12}>
        <GridItem />
      </Grid>

      <Grid item sm={6} xs={12}>
        <Typography className={classes.secondRowSecondItem}>
          Second Row, Second Item
        </Typography>
      </Grid>

      <Grid item sm={4} xs={12}>
        <Typography className={classes.thirdRow}>Third Row</Typography>
      </Grid>

      <Grid item sm={4} xs={12}>
        <Typography className={classes.thirdRow}>Third Row</Typography>
      </Grid>

      <Grid item sm={4} xs={12}>
        <Typography className={classes.thirdRow}>Third Row</Typography>
      </Grid>
    </Grid>
  );
};

export default GridLayout;
