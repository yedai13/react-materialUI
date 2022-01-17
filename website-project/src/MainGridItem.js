import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 400,
    backgroundImage:
      "url(https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg)",
    color: theme.palette.common.white,
    backgroundSize: "cover",
  },
  mainItem: {
    padding: theme.spacing(6),
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const MainGridItem = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item className={classes.mainItem} md={6}>
        <Typography component="h2" variant="h4">
          Hello Coding
        </Typography>

        <Typography variant="body" paragraph>
          Do you want yo learn to code? Smash your career goals. Build websites,
          games, apps, and aritifial intelligence project in 99 days.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MainGridItem;
