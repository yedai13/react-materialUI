import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";
import CuotasHeader from "./Components/CuotasHeader";
import ProductosMainGrid from "./Components/ProductosMainGrid";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CuotasHeader />
        <Container>
          <main>
            <ProductosMainGrid />
          </main>
        </Container>
      </ThemeProvider>
    </div>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: "Outfit, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Outfit';
          font-style: normal;
          font-weight: 400;
         
        }
      `,
    },
  },
});

export default App;
