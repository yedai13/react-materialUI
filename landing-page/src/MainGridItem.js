import {
  Container,
  Card,
  Typography,
  Button,
  CardMedia,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 300,
  },
  mainItem: {
    padding: theme.spacing(8),
    textAlign: "left",
  },
  mainContainer: {
    paddingTop: 120,
    paddingBottom: 120,
    background: "darkorange",
  },
  imageCard: {
    margin: 40,
  },
}));
const MainGridItem = () => {
  const { cardMedia, mainItem, mainContainer, imageCard } = useStyles();
  return (
    <Container className={mainContainer}>
      <Card>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} className={mainItem}>
            <Typography variant="h2">Unlimited Subcription</Typography>
            <Typography>2,000 hours of online courses</Typography>
            <Button color="primary" variant="contained">
              Sign Up
            </Button>
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <Card className={imageCard}>
              <CardMedia
                className={cardMedia}
                image="https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg"
              ></CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default MainGridItem;
