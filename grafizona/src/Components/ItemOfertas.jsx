import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  descriptionStyle: {
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

const ItemOfertas = ({ icon, title, description }) => {
  const { titleStyle, descriptionStyle } = useStyles();
  return (
    <Grid container>
      <Grid item lg={2} md={12} sm={12} xs={12}>
        {icon}
      </Grid>
      <Grid item lg={10} md={12} sm={12} xs={12}>
        <Typography className={titleStyle}>{title}</Typography>
        <Typography className={descriptionStyle}>{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default ItemOfertas;
