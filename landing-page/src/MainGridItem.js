import {
  Container,
  Card,
  Typography,
  Button,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 300,
  },
}));
const MainGridItem = () => {
  const { cardMedia } = useStyles();
  return (
    <Container>
      <Card>
        <Typography>Unlimited Subcription</Typography>
        <Typography>2,000 hours of online courses</Typography>
        <Button color="primary" variant="contained">
          Sign Up
        </Button>
        <Card>
          <CardMedia
            className={cardMedia}
            image="https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg"
          ></CardMedia>
        </Card>
      </Card>
    </Container>
  );
};

export default MainGridItem;
