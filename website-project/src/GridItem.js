import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowForward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  cardImage: {
    height: 300,
  },
}));

const GridItem = (props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title={props.title} subheader="Recommended for you" />

      <CardMedia
        className={classes.cardImage}
        image={props.image}
        title="Excel Masterclass"
      />

      <CardContent>
        <Typography>{props.description}</Typography>
      </CardContent>

      <CardActions>
        <IconButton aria-label="Visit page">
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default GridItem;
