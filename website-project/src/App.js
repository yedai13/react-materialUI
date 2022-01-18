import "./App.css";
import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import NavigationBar from "./NavigationBar";
import GridLayout from "./GridLayout";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavigationBar />

      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
