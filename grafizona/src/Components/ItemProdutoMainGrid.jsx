import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: 30,
  },
  imageBox: {
    width: 310,
    height: 310,
  },
  //   text: {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     transform: "translate(-50%,-50%)",
  //     color: "orange",
  //   },
}));

const ItemProductoMainGrid = ({ title, image, description }) => {
  const { imageBox, text, box } = useStyles();
  return (
    <Box className={box}>
      <img src={image} className={imageBox} />
      <Box className={text}>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};

export default ItemProductoMainGrid;
{
  /* <Card className={imageCard}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        image={skirt}
        title="Contemplative Reptile"
      ></CardMedia>
    </Card> */
}
