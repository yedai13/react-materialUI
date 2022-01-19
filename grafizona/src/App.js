import { Container, CssBaseline } from "@material-ui/core";
import "./App.css";
import CuotasHeader from "./Components/CuotasHeader";
import ProductosMainGrid from "./Components/ProductosMainGrid";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <CuotasHeader />
      <Container>
        <main>
          <ProductosMainGrid />
        </main>
      </Container>
    </div>
  );
}

export default App;
