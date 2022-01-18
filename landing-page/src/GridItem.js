import React from "react";
import { Container, Icon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: 50,
  },
}));

const GridItem = (props) => {
  const { gridItem } = useStyles();
  return (
    <Container align="left" className={gridItem}>
      <Icon>{props.icon}</Icon>
      <Typography variant="h5">{props.title}</Typography>
      <Typography>{props.description}</Typography>
    </Container>
  );
};

export default GridItem;
