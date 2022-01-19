import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardMain: {
    height: 350,
    width: 223,
    marginTop: 40,
    marginBottom: 30,
  },
  cardImage: {
    height: 221,
    width: 225,
  },

  cardTitle: {
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: 400,
    marginBottom: 5,
  },
  button: {
    textAlign: "center",
    width: "100%",
    fontSize: 11,
    borderRadius: 0,
    "&:hover": {
      background: "#000",
      color: "#fff",
    },
  },

  cardAction: {
    justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
    paddingLeft: 2,
    paddingRight: 2,
  },
  cardContent: {
    paddingBottom: 10,
  },
}));

const ItemStoreGrid = ({ title, price, image }) => {
  const {
    cardImage,
    cardMain,
    cardTitle,
    button,
    cardAction,
    bold,
    cardContent,
  } = useStyles();
  return (
    <Card className={cardMain}>
      <CardMedia image={image} title={title} className={cardImage} />
      <CardContent className={cardContent}>
        <Typography className={cardTitle}>{title}</Typography>
        <Typography>${price}</Typography>
      </CardContent>

      <CardActions className={cardAction}>
        <Button variant="outlined" className={button}>
          <span className={bold}>3</span> cuotas sin interes de{" "}
          <span className={bold}>${Math.round(price / 3)}</span>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemStoreGrid;
