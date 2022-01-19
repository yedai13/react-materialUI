import { Box, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: 30,
    position: "relative",
  },
  imageBox: {
    width: 310,
    height: 310,
    filter: "brightness(70%)",
    transition: "all 1s",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "brightness(40%)",
    },
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "white",
  },
}));

const ItemProductoMainGrid = ({ title, image, description }) => {
  const { imageBox, text, box } = useStyles();
  return (
    <Box className={box}>
      <img src={image} className={imageBox} />
      <Box className={text}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
};

export default ItemProductoMainGrid;
// {
//   /* <Card className={imageCard}>
//       <CardMedia
//         component="img"
//         alt="Contemplative Reptile"
//         image={skirt}
//         title="Contemplative Reptile"
//       ></CardMedia>
//     </Card> */
// }
