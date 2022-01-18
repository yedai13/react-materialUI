import { Container, Grid, Typography } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import React from "react";
import GridItem from "./GridItem";

const ProductInformation = () => {
  return (
    <Container>
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
