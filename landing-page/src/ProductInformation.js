import { Container, Grid, Typography } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import GridItem from "./GridItem";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 120,
    paddingBottom: 120,
  },
}));

const ProductInformation = () => {
  const { mainContainer } = useStyles();
  return (
    <Container className={mainContainer}>
      <Typography variant="h2">What You'll Get</Typography>
      <Grid container>
        <Grid item>
          <GridItem
            title="200 courses"
            description="20-60 hours of new courses every month"
            icon={<ThumbUp />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductInformation;
