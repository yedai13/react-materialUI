import { Box, Container, Link, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  menuBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <Container>
      <Toolbar>
        <Typography>Mammoth Interactive</Typography>

        <Box className={classes.menuBox}>
          {["home", "courses", "sign up"].map((menuOption) => (
            <Link
              component="button"
              variant="body1"
              className={classes.menuOption}
            >
              {menuOption.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}
