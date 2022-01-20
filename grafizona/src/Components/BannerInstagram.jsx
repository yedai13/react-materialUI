import { Box, Grid, Typography } from "@material-ui/core";
import { Instagram } from "@material-ui/icons";
import React from "react";
import banner from "../img/banner.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: 60,
  },
  boxContainer: {
    marginTop: 30,
    marginBottom: 30,
    borderBottom: "1px dotted #000",
  },
  imgBanner: {
    marginBottom: 20,
  },
  title: {
    fontSize: 12,
  },
  description: {
    fontSize: 24,
    fontWeight: "bold",
  },
  boxGrid: {
    marginBottom: 15,
  },
}));

const BannerInstragram = () => {
  const { icon, title, description, boxContainer, boxGrid, imgBanner } =
    useStyles();
  return (
    <Box className={boxContainer}>
      <img src={banner} alt="baner" className={imgBanner} />

      <Box className={boxGrid}>
        <Grid container justifyContent="center">
          <Grid item>
            <Instagram className={icon} />
          </Grid>
          <Grid item>
            <Typography className={title}>SEGUINOS EN INSTAGRAM</Typography>
            <Typography className={description}>@GRAFIZONA</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BannerInstragram;
