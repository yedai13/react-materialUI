import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import akira from "../img/akira-remera.jpg";
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

  cardHeader: {
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: 400,
  },
  button: {
    textAlign: "center",
    width: "100%",
    fontSize: 12,
    borderRadius: 0,
  },

  cardAction: {
    justifyContent: "center",
  },
}));

const ItemStoreGrid = () => {
  const { cardImage, cardMain, cardHeader, button, cardAction } = useStyles();
  return (
    <Card className={cardMain}>
      <CardMedia image={akira} title="akira" className={cardImage} />
      <CardContent>
        <Typography className={cardHeader}>
          AKIRA 2 - REMERA ESTILO ANIME
        </Typography>
        <Typography>$2.790</Typography>
      </CardContent>

      <CardActions className={cardAction}>
        <Button variant="outlined" className={button}>
          {" "}
          3 cuotas sin interes
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemStoreGrid;
