import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";
import CuotasHeader from "./Components/CuotasHeader";
import NavBar from "./Components/NavBar";
import NavGrafizona from "./Components/NavGrafizona";
import ProductosMainGrid from "./Components/ProductosMainGrid";
import StoreGrid from "./Components/StoreGrid";
import Slider from "./Components/Slider";
import OfertasGrid from "./Components/OfertasGrid";
import BannerInstragram from "./Components/BannerInstagram";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CuotasHeader />
        <Container>
          <header>
            <NavGrafizona />
            <NavBar />
            <Slider />
          </header>
          <main>
            <OfertasGrid />
            <ProductosMainGrid />

            <StoreGrid />
            <BannerInstragram />
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
