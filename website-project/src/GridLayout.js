import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const GridLayout = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item sm={12} xs={12}>
        <Typography className={classes.mainGridItem}>
          Main Grid Items
        </Typography>
      </Grid>

      <Grid item sm={6} xs={12}>
        <Typography className={classes.secondRowFirstItem}>
          Second Row, Fist Item
        </Typography>
      </Grid>

      <Grid item sm={6} xs={12}>
        <Typography className={classes.secondRowSecondItem}>
          Second Row, Second Item
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GridLayout;
