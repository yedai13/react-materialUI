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
}));

const MainGridItem = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid item className={classes.mainContainer}>
        <Typography>Hello Coding</Typography>

        <Typography>
          Do you want yo learn to code? Smash your career goals. Build websites,
          games, apps, and aritifial intelligence project in 99 days.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MainGridItem;
