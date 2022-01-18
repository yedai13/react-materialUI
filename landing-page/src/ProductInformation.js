import { Container, Grid, Typography } from "@material-ui/core";
import {
  Build,
  CardMembership,
  Face,
  Loyalty,
  Public,
  School,
  ThumbUp,
  VerifiedUser,
  VideoLibrary,
} from "@material-ui/icons";
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
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <GridItem
            title="200 courses"
            description="20-60 hours of new courses every month"
            icon={<ThumbUp />}
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <GridItem
            title="Build projects"
            description="Project-based curriculum to build your portafolio"
            icon={<Build />}
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <GridItem
            title="Earn certificates"
            description="Graduation certificate for every course"
            icon={<VerifiedUser />}
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <GridItem
            title="All levels"
            description="Courses for absolute beginners and the experienced"
            icon={<Face />}
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <GridItem
            title="Trusted curricula"
            description="Efficiente lectures with step by step explanations"
            icon={<VideoLibrary />}
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <GridItem
            title="Industry standar"
            description="10 years of award-winning course delivery"
            icon={<CardMembership />}
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <GridItem
            title="Worldwide community"
            description="1 million+ students in 186 countries"
            icon={<Public />}
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <GridItem
            title="Accessible software"
            description="Learn with free tools and affordable courses"
            icon={<School />}
          />
        </Grid>

        <Grid item lg={4} md={12} sm={12} xs={12}>
          <GridItem
            title="Only $19 a month"
            description="Yearly and lifetime options avialable"
            icon={<Loyalty />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductInformation;
