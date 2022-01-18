import React from "react";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pricingCard: {
    padding: 50,
    margin: 40,
    borderColor: "orange",
    "&:hover": {
      background: "darkorange",
      cursor: "pointer",
    },
  },
}));

const PricingOption = ({ title, price, length, description }) => {
  const { pricingCard } = useStyles();

  return (
    <Card className={pricingCard} variant="outlined">
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h3">${price}</Typography>
      <Typography variant="h7">/ {length}</Typography>
      <Typography variant="h6">{description}</Typography>
    </Card>
  );
};

export default PricingOption;
