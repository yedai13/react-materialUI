import {
  Button,
  Card,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@material-ui/core";
import { Facebook, Twitter, YouTube } from "@material-ui/icons";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Grid container>
        <Grid item>
          <Card>
            <form>
              <TextField label="Get in touch" />
            </form>
          </Card>
          <Button>Send Message</Button>
        </Grid>

        <Grid item>
          <Typography>Mammoth Interactive</Typography>
          <Typography>
            Building award-winning, affordable online courses sinse 2009.
          </Typography>

          <Grid item>
            <Icon>
              <YouTube />
            </Icon>

            <Icon>
              <Facebook />
            </Icon>

            <Icon>
              <Twitter />
            </Icon>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
