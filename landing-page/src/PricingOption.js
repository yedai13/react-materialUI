import React from "react";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  pricingCard: {
    padding: 50,
    margin: 40,
    borderColor: "orange",
  },
}));

const PricingOption = () => {
  const { pricingCard } = useStyles();

  return (
    <Card className={pricingCard} variant="outlined">
      <Typography variant="h5">Monthly</Typography>
      <Typography variant="h3">$19</Typography>
      <Typography variant="h7">/ month</Typography>
      <Typography variant="h6">Get all our courses</Typography>
    </Card>
  );
};

export default PricingOption;
