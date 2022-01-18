import React from "react";
import { Container, Icon, Typography } from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
const GridItem = (props) => {
  return (
    <Container>
      <Icon>{props.icon}</Icon>
      <Typography variant="h5">{props.title}</Typography>
      <Typography>{props.description}</Typography>
    </Container>
  );
};

export default GridItem;
