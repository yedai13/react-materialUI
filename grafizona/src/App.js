import { Container, CssBaseline } from "@material-ui/core";
import "./App.css";
import CuotasHeader from "./Components/CuotasHeader";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <CuotasHeader />
      <Container>
        <main></main>
      </Container>
    </div>
  );
}

export default App;
