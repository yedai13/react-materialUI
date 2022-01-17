import { Box, Container, Link, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function NavigationBar() {
  return (
    <Container>
      <Toolbar>
        <Typography>Mammoth Interactive</Typography>

        <Box>
          {["home", "courses", "sign up"].map((menuOption) => (
            <Link component="button" variant="body1">
              {menuOption.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}
